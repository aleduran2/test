Job 5448, 4858 

## Code Challenge for Angular Front End Developer

 
### Task Description  

Create a Angular app to displays a list of users fetched from a public REST API.
The app should be responsive and include the following features:  
  
 - [ ] Fetch user data from the JSONPlaceholder API.  
	 -  [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
 - [ ] Display the user names and email addresses in a responsive card layout.  
 - [ ] Implement a search functionality that allows users to filter the displayed users by name.  
 - [ ] Ensure that the application follows best practices for Angular development, including use of: 
	 - [ ] components
	 - [ ] services
	 - [ ] reactive programming.  
    
### Requirements  

 - [ ] Use Angular 11 or higher.  
 - [ ] Implement responsive design using CSS or a CSS framework (e.g., Bootstrap).  
 - [ ] Use RxJS for handling asynchronous data fetching.  
 - [ ] Write clean, maintainable code adhering to SOLID principles.  

### If you want to use this template
`export candidate_repo='___YOUR_REPOSITORY_URL___'`

    [ "$candidate_repo" = "___YOUR_REPOSITORY_URL___" ] \
      && echo "invalid candidate repo" \
      && exit 1

    export original_repo_name='code_challenge_job_5448_4858'
    git clone "https://github.com/CoinBR/${original_repo_name}"
    cd ${original_repo_name}

    rm -rf .git
    rm README.md
    mv README.md.candidate README.md
    
    git init
    git add .
    git commit -m "initial commit"
    git remote add origin ${candidate_repo}
    git push -u origin master

