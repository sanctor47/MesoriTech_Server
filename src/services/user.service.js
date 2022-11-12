import User from '../models/user.model';
import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { newDomain } from './domain.service';

//get all users
export const getAllUsers = async () => {
  try {
    const data = await User.find();
    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

//create new user
export const newUser = async (body) => {
  try {
    const data = await User.create(body);
    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

//update single user
export const updateUser = async (_id, body) => {
  try {
    const data = await User.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }

};

//delete single user
export const deleteUser = async (id) => {
  try {
    await User.findByIdAndDelete(id);
    return '';
  } catch (error) {
    console.log(error);
    throw error;
  }

};

//get single user
export const getUser = async (id) => {
  try {
    const data = await User.findById(id);
    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signup = async (body) => {
  try {
    const { firstName, lastName, email, phone, password } = body;
    const TargetUser = await User.findOne({ email: email });
    if (TargetUser) {
      throw {
        code: HttpStatus.CONFLICT,
        message: "Email address already in use"
      }
    }
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const newUserData = {
      firstName,
      lastName,
      email,
      password: encryptedPassword,
      phone,
    }
    const NewUser = await User.create(newUserData);
    const token = jwt.sign(
      { user_id: NewUser._id, email: NewUser.email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );
    const domain = await newDomain({
      name: `${firstName} ${lastName} - Organization`,
      createdBy: NewUser._id
    })
    const appendedUser = await updateUser(NewUser._id,{
      domain: domain._id,
    })
    const data = {
      user: appendedUser,
      token
    }
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const login = async (body) => {
  try {
    if (!body.email || !body.password) {
      throw {
        message: "Please enter all required fields."
      }
    }
    const TargetUser = await User.findOne({ email: body.email })
    // console.log(TargetUser)
    if (TargetUser) {
      console.log(TargetUser.password);
      console.log(body.password);
      const res = await bcrypt.compare(body.password, TargetUser.password)
      if (res) {
        const token = jwt.sign(
          { user_id: TargetUser._id, email: TargetUser.email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        )
        const response = {
          user: TargetUser,
          token: token,
        }
        return response
      } else {
        throw {
          code: 403,
          message: "Invalid Credintials"
        }
      }
    } else {
      throw {
        code: 404,
        message: "User not found"
      }
    }
  } catch (error) {
    // console.log(error);
    throw error;
  }
};