import { 
    GraphQLID,
    GraphQLString, 
    GraphQLObjectType,
    GraphQLSchema 
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

/**
 * input RecruitmentInput {
 *   name: String!
 *   description: String
 * } 
 */
const RecruitmentInputType = new GraphQLInputObjectType({
    name: 'RecruitmentInput',
    description: 'Recruitment user payload',
    fields: () => ({
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: GraphQLString,
        }
    })
});

/**
 * mutation {
 *   createRecruitment(
 *     name: "Some recruiment program",
 *     description: "Activities in recruiment process"
 *   ) {
 *     id
 *     name
 *     description
 *   }
 * }
 */
const recruitmentMutations = {
    createRecruitment: {
      type: RecruitmentType,
      args: {
        input: {
          type: new GraphQLNonNull(RecruitmentInputType),
        },
        description: {
          type: GraphQLString,
        },
      },
      resolve: async (rootValue, { input }) => {
        return createRecruitment(input);
      },
    },
};

  

export {
    RecruitmentType,
    RecruitmentInputType,
    recruitmentMutations
};



/*
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      recruitment: {
        type: RecruitmentType,
        args: {
          id: { type: GraphQLID }
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'createRecruitment',
    fields: () => ({
        createRecruitment: {
            description: 'Create a recruitment process'
            args: {
                input: {input}
            }
        }
    })
  })
});

description: 'These are the things we can change',
  fields: () => ({
    deleteArticle: {
      type: ArticleType,
      description: 'Delete an article with id and return the article that was deleted.',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (value, { id }) => {
        return ArticleServices.delete(id);
      }
    }
*/