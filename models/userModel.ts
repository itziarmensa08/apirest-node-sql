// models/User.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/mysql';
import { v4 as uuidv4 } from 'uuid';

class User extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export { User };
