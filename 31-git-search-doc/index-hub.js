class Github {
  constructor() {
    this.repos_count = 10;
    this.repos_sort = 'create: asc';
    // https://api.github.com/users/alenskupnjak
    // https://api.github.com/users/alenskupnjak/repos
  }

  async getUser(user) {
    try {
      let URLprofile = `https://api.github.com/users/${user}`
      let URLrepo = `https://api.github.com/users/${user}/repos?sort=created`
      
      const profileResponse = await fetch(URLprofile)
      const profile = await profileResponse.json();
      
      const repoResponse = await fetch(URLrepo)
      const repos = await  repoResponse.json();

      return {
        profile: profile,
        repos: repos
      }
      
    } catch (err) {
      console.log(err);
    }
  }
}

