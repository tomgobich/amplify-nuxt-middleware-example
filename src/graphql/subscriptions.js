/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($id: String) {
  onCreateUser(id: $id) {
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
export const onUpdateUser = `subscription OnUpdateUser($id: String) {
  onUpdateUser(id: $id) {
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
export const onDeleteUser = `subscription OnDeleteUser($id: String) {
  onDeleteUser(id: $id) {
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
export const onCreatePost = `subscription OnCreatePost($authorId: String) {
  onCreatePost(authorId: $authorId) {
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
export const onUpdatePost = `subscription OnUpdatePost($authorId: String) {
  onUpdatePost(authorId: $authorId) {
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
export const onDeletePost = `subscription OnDeletePost($authorId: String) {
  onDeletePost(authorId: $authorId) {
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
export const onCreateComment = `subscription OnCreateComment($authorId: String) {
  onCreateComment(authorId: $authorId) {
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
export const onUpdateComment = `subscription OnUpdateComment($authorId: String) {
  onUpdateComment(authorId: $authorId) {
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
export const onDeleteComment = `subscription OnDeleteComment($authorId: String) {
  onDeleteComment(authorId: $authorId) {
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
export const onCreatePlaylist = `subscription OnCreatePlaylist($authorId: String) {
  onCreatePlaylist(authorId: $authorId) {
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
export const onUpdatePlaylist = `subscription OnUpdatePlaylist($authorId: String) {
  onUpdatePlaylist(authorId: $authorId) {
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
export const onDeletePlaylist = `subscription OnDeletePlaylist($authorId: String) {
  onDeletePlaylist(authorId: $authorId) {
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
export const onCreateSkill = `subscription OnCreateSkill {
  onCreateSkill {
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
export const onUpdateSkill = `subscription OnUpdateSkill {
  onUpdateSkill {
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
export const onDeleteSkill = `subscription OnDeleteSkill {
  onDeleteSkill {
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
