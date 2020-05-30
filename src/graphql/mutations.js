/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    name
    biography
    website
    preferences {
      name
      theme
    }
    email
    avatar {
      bucket
      region
      key
      url
    }
    accounts {
      twitter
      facebook
      instagram
      github
      dribbble
      linkedin
      behance
      ello
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    posts {
      items {
        id
        title
        slug
        summary
        difficulty
        body
        releaseDate
        authorId
        deletedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    comments {
      items {
        id
        content
        authorId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    playlists {
      items {
        id
        title
        slug
        summary
        difficulty
        releaseDate
        createdAt
        updatedAt
        authorId
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
}
`;
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    name
    biography
    website
    preferences {
      name
      theme
    }
    email
    avatar {
      bucket
      region
      key
      url
    }
    accounts {
      twitter
      facebook
      instagram
      github
      dribbble
      linkedin
      behance
      ello
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    posts {
      items {
        id
        title
        slug
        summary
        difficulty
        body
        releaseDate
        authorId
        deletedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    comments {
      items {
        id
        content
        authorId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    playlists {
      items {
        id
        title
        slug
        summary
        difficulty
        releaseDate
        createdAt
        updatedAt
        authorId
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    name
    biography
    website
    preferences {
      name
      theme
    }
    email
    avatar {
      bucket
      region
      key
      url
    }
    accounts {
      twitter
      facebook
      instagram
      github
      dribbble
      linkedin
      behance
      ello
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    posts {
      items {
        id
        title
        slug
        summary
        difficulty
        body
        releaseDate
        authorId
        deletedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    comments {
      items {
        id
        content
        authorId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    playlists {
      items {
        id
        title
        slug
        summary
        difficulty
        releaseDate
        createdAt
        updatedAt
        authorId
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
}
`;
export const createPost = `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    title
    slug
    summary
    difficulty
    body
    releaseDate
    authorId
    deletedAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    author {
      id
      username
      name
      biography
      website
      preferences {
        name
        theme
      }
      email
      avatar {
        bucket
        region
        key
        url
      }
      accounts {
        twitter
        facebook
        instagram
        github
        dribbble
        linkedin
        behance
        ello
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
    comments {
      items {
        id
        content
        authorId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    playlist {
      id
      title
      slug
      summary
      difficulty
      thumbnail {
        bucket
        region
        key
        url
      }
      releaseDate
      createdAt
      updatedAt
      authorId
      _version
      _deleted
      _lastChangedAt
      author {
        id
        username
        name
        biography
        website
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      posts {
        nextToken
        startedAt
      }
      skill {
        id
        name
        summary
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
    skill {
      id
      name
      thumbnail {
        bucket
        region
        key
        url
      }
      summary
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
  }
}
`;
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    title
    slug
    summary
    difficulty
    body
    releaseDate
    authorId
    deletedAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    author {
      id
      username
      name
      biography
      website
      preferences {
        name
        theme
      }
      email
      avatar {
        bucket
        region
        key
        url
      }
      accounts {
        twitter
        facebook
        instagram
        github
        dribbble
        linkedin
        behance
        ello
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
    comments {
      items {
        id
        content
        authorId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    playlist {
      id
      title
      slug
      summary
      difficulty
      thumbnail {
        bucket
        region
        key
        url
      }
      releaseDate
      createdAt
      updatedAt
      authorId
      _version
      _deleted
      _lastChangedAt
      author {
        id
        username
        name
        biography
        website
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      posts {
        nextToken
        startedAt
      }
      skill {
        id
        name
        summary
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
    skill {
      id
      name
      thumbnail {
        bucket
        region
        key
        url
      }
      summary
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
  }
}
`;
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    title
    slug
    summary
    difficulty
    body
    releaseDate
    authorId
    deletedAt
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    author {
      id
      username
      name
      biography
      website
      preferences {
        name
        theme
      }
      email
      avatar {
        bucket
        region
        key
        url
      }
      accounts {
        twitter
        facebook
        instagram
        github
        dribbble
        linkedin
        behance
        ello
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
    comments {
      items {
        id
        content
        authorId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    playlist {
      id
      title
      slug
      summary
      difficulty
      thumbnail {
        bucket
        region
        key
        url
      }
      releaseDate
      createdAt
      updatedAt
      authorId
      _version
      _deleted
      _lastChangedAt
      author {
        id
        username
        name
        biography
        website
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      posts {
        nextToken
        startedAt
      }
      skill {
        id
        name
        summary
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
    skill {
      id
      name
      thumbnail {
        bucket
        region
        key
        url
      }
      summary
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
  }
}
`;
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    content
    authorId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    author {
      id
      username
      name
      biography
      website
      preferences {
        name
        theme
      }
      email
      avatar {
        bucket
        region
        key
        url
      }
      accounts {
        twitter
        facebook
        instagram
        github
        dribbble
        linkedin
        behance
        ello
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
    post {
      id
      title
      slug
      summary
      difficulty
      body
      releaseDate
      authorId
      deletedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      author {
        id
        username
        name
        biography
        website
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlist {
        id
        title
        slug
        summary
        difficulty
        releaseDate
        createdAt
        updatedAt
        authorId
        _version
        _deleted
        _lastChangedAt
      }
      skill {
        id
        name
        summary
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
  }
}
`;
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    content
    authorId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    author {
      id
      username
      name
      biography
      website
      preferences {
        name
        theme
      }
      email
      avatar {
        bucket
        region
        key
        url
      }
      accounts {
        twitter
        facebook
        instagram
        github
        dribbble
        linkedin
        behance
        ello
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
    post {
      id
      title
      slug
      summary
      difficulty
      body
      releaseDate
      authorId
      deletedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      author {
        id
        username
        name
        biography
        website
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlist {
        id
        title
        slug
        summary
        difficulty
        releaseDate
        createdAt
        updatedAt
        authorId
        _version
        _deleted
        _lastChangedAt
      }
      skill {
        id
        name
        summary
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    content
    authorId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    author {
      id
      username
      name
      biography
      website
      preferences {
        name
        theme
      }
      email
      avatar {
        bucket
        region
        key
        url
      }
      accounts {
        twitter
        facebook
        instagram
        github
        dribbble
        linkedin
        behance
        ello
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
    post {
      id
      title
      slug
      summary
      difficulty
      body
      releaseDate
      authorId
      deletedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      author {
        id
        username
        name
        biography
        website
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlist {
        id
        title
        slug
        summary
        difficulty
        releaseDate
        createdAt
        updatedAt
        authorId
        _version
        _deleted
        _lastChangedAt
      }
      skill {
        id
        name
        summary
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
    }
  }
}
`;
export const createPlaylist = `mutation CreatePlaylist(
  $input: CreatePlaylistInput!
  $condition: ModelPlaylistConditionInput
) {
  createPlaylist(input: $input, condition: $condition) {
    id
    title
    slug
    summary
    difficulty
    thumbnail {
      bucket
      region
      key
      url
    }
    releaseDate
    createdAt
    updatedAt
    authorId
    _version
    _deleted
    _lastChangedAt
    author {
      id
      username
      name
      biography
      website
      preferences {
        name
        theme
      }
      email
      avatar {
        bucket
        region
        key
        url
      }
      accounts {
        twitter
        facebook
        instagram
        github
        dribbble
        linkedin
        behance
        ello
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
    posts {
      items {
        id
        title
        slug
        summary
        difficulty
        body
        releaseDate
        authorId
        deletedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    skill {
      id
      name
      thumbnail {
        bucket
        region
        key
        url
      }
      summary
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
  }
}
`;
export const updatePlaylist = `mutation UpdatePlaylist(
  $input: UpdatePlaylistInput!
  $condition: ModelPlaylistConditionInput
) {
  updatePlaylist(input: $input, condition: $condition) {
    id
    title
    slug
    summary
    difficulty
    thumbnail {
      bucket
      region
      key
      url
    }
    releaseDate
    createdAt
    updatedAt
    authorId
    _version
    _deleted
    _lastChangedAt
    author {
      id
      username
      name
      biography
      website
      preferences {
        name
        theme
      }
      email
      avatar {
        bucket
        region
        key
        url
      }
      accounts {
        twitter
        facebook
        instagram
        github
        dribbble
        linkedin
        behance
        ello
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
    posts {
      items {
        id
        title
        slug
        summary
        difficulty
        body
        releaseDate
        authorId
        deletedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    skill {
      id
      name
      thumbnail {
        bucket
        region
        key
        url
      }
      summary
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
  }
}
`;
export const deletePlaylist = `mutation DeletePlaylist(
  $input: DeletePlaylistInput!
  $condition: ModelPlaylistConditionInput
) {
  deletePlaylist(input: $input, condition: $condition) {
    id
    title
    slug
    summary
    difficulty
    thumbnail {
      bucket
      region
      key
      url
    }
    releaseDate
    createdAt
    updatedAt
    authorId
    _version
    _deleted
    _lastChangedAt
    author {
      id
      username
      name
      biography
      website
      preferences {
        name
        theme
      }
      email
      avatar {
        bucket
        region
        key
        url
      }
      accounts {
        twitter
        facebook
        instagram
        github
        dribbble
        linkedin
        behance
        ello
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
    posts {
      items {
        id
        title
        slug
        summary
        difficulty
        body
        releaseDate
        authorId
        deletedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    skill {
      id
      name
      thumbnail {
        bucket
        region
        key
        url
      }
      summary
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
      playlists {
        nextToken
        startedAt
      }
    }
  }
}
`;
export const createSkill = `mutation CreateSkill(
  $input: CreateSkillInput!
  $condition: ModelSkillConditionInput
) {
  createSkill(input: $input, condition: $condition) {
    id
    name
    thumbnail {
      bucket
      region
      key
      url
    }
    summary
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    posts {
      items {
        id
        title
        slug
        summary
        difficulty
        body
        releaseDate
        authorId
        deletedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    playlists {
      items {
        id
        title
        slug
        summary
        difficulty
        releaseDate
        createdAt
        updatedAt
        authorId
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
}
`;
export const updateSkill = `mutation UpdateSkill(
  $input: UpdateSkillInput!
  $condition: ModelSkillConditionInput
) {
  updateSkill(input: $input, condition: $condition) {
    id
    name
    thumbnail {
      bucket
      region
      key
      url
    }
    summary
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    posts {
      items {
        id
        title
        slug
        summary
        difficulty
        body
        releaseDate
        authorId
        deletedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    playlists {
      items {
        id
        title
        slug
        summary
        difficulty
        releaseDate
        createdAt
        updatedAt
        authorId
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
}
`;
export const deleteSkill = `mutation DeleteSkill(
  $input: DeleteSkillInput!
  $condition: ModelSkillConditionInput
) {
  deleteSkill(input: $input, condition: $condition) {
    id
    name
    thumbnail {
      bucket
      region
      key
      url
    }
    summary
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    posts {
      items {
        id
        title
        slug
        summary
        difficulty
        body
        releaseDate
        authorId
        deletedAt
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
    playlists {
      items {
        id
        title
        slug
        summary
        difficulty
        releaseDate
        createdAt
        updatedAt
        authorId
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
}
`;
