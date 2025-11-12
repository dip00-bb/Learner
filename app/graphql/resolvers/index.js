import { userResolvers } from './user.js';
import { merge } from 'lodash-es';

export const resolvers = merge({}, userResolvers);
