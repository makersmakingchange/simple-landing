// Next.js API route support: https://nextjs.org/\/api-routes/introduction
import {
  Octokit
} from '@octokit/core';

const octokit = new Octokit({
  auth: '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'//process.env.GITHUB_AUTH_TOKEN
})

export default async function handler(req, res) {
  const projects = await octokit.request(`GET /orgs/${req.query.user}/repos?per_page=100`);
  let repo = projects.data[47].name;
  let directories = [];  
  const repoRoot = await octokit.request(`GET /repos/${req.query.user}/${repo}/contents/`);  
  for (let j = 0; j < repoRoot.data.length; j++) {
    let item = repoRoot.data[j];
    if(item.type === 'dir'){
      directories.push({
        'directoryName': item.name,
        'files': await (await getFiles(req.query.user, repo, item.path)).data
      });
    }
    else{ 
      directories.push({
        'directoryName': 'repoRoot',
        'files': item.name
      })

    }
    

  }
  res.status(200).json({
    'directories': directories
  });

}
const getFiles = async(user, repo, path) => {
 const files = await octokit.request(`GET /repos/${user}/${repo}/contents/${path}`);
 for (let i = 0; i < files.data.length; i++) {
  if (files.data[i].type === 'dir'){
    getFiles(user, repo, files.data[i].path);
  }
 }
 return files
 
}