// Next.js API route support: https://nextjs.org/\/api-routes/introduction
import {
  Octokit
} from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN
})

export default async function handler(req, res) {
  const projects = await octokit.request(`GET /orgs/${req.query.user}/repos?per_page=100`);
  let repo = projects.data[47].name;
  let directories = [], files = [], returnObjet = [];
  
  const repoRoot = await octokit.request(`GET /repos/${req.query.user}/${repo}/contents/`);  
  for (let j = 0; j < repoRoot.data.length; j++) {
    let item = repoRoot.data[j];
    if(item.type === 'dir'){
      directories.push({
        'directoryName': item.name        
      })
      files.push({
        'fileName': getFiles(req.query.user, repo, item.path),
        'parentDirectory': item.path
      });
    }
    else{
      files.push({
        'fileName': item.name
      })

    }
    

  }
  res.status(200).json(getFiles(req.query.user, repo, repoRoot.data[3].path));

}
const getFiles = (user, repo, path) => {
  
   octokit.request(`GET /repos/${user}/${repo}/contents/${path}`).then((file) =>{
    return files.data
   }).catch((err) => {});
}