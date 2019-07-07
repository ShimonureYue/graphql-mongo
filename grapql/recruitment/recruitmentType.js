import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

/**
 * type Recruitment {
 *  id: String!
 *  name: String!
 *  description: String
 * }
 */
const RecruitmentType = new GraphQLObjectType({
  name: 'Recruitment',
  description: 'RecruitmentType definition',
  fields: {
    id: { 
        type: new GraphQLNonNull(GraphQLID) 
    },
    name: { 
        type: new GraphQLNonNull(GraphQLString)
    },
    description: { 
        type: GraphQLString 
    }
  }
});

export default RecruitmentType 
