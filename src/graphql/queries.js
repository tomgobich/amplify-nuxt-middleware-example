/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const usersByUsername = `query UsersByUsername(
  $username: String
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByUsername(
    username: $username
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const syncUsers = `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
    startedAt
  }
}
`;
export const postsBySlug = `query PostsBySlug(
  $slug: String
  $releaseDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsBySlug(
    slug: $slug
    releaseDate: $releaseDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
    startedAt
  }
}
`;
export const syncPosts = `query SyncPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPosts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
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
    nextToken
    startedAt
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      }
    }
    nextToken
    startedAt
  }
}
`;
export const syncComments = `query SyncComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncComments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      }
    }
    nextToken
    startedAt
  }
}
`;
export const getPlaylist = `query GetPlaylist($id: ID!) {
  getPlaylist(id: $id) {
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
export const listPlaylists = `query ListPlaylists(
  $filter: ModelPlaylistFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlaylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const playlistsBySlug = `query PlaylistsBySlug(
  $slug: String
  $releaseDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPlaylistFilterInput
  $limit: Int
  $nextToken: String
) {
  playlistsBySlug(
    slug: $slug
    releaseDate: $releaseDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const syncPlaylists = `query SyncPlaylists(
  $filter: ModelPlaylistFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPlaylists(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const listSkills = `query ListSkills(
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const getSkill = `query GetSkill($id: ID!) {
  getSkill(id: $id) {
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
export const syncSkills = `query SyncSkills(
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSkills(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
