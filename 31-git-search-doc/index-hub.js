class Github {
  constructor() {
    this.client_id = 'ec211c2c8ef247d5b385';
    this.client_secret = 'db29824764c9e96f8273c9f4854f16c8262e7c92';
    this.repos_count = 10;
    this.repos_sort = 'create: asc';
    // https://api.github.com/users/alenskupnjak
    // https://api.github.com/users/alenskupnjak/repos
  }

  async getUser(user) {
    try {
      let URLprofile = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
      let URLrepo = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
      
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

