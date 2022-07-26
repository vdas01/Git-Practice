// D:\Git>git init "practice"
// Initialized empty Git repository in D:/Git/practice/.git/

// D:\Git>type nul > index.html

// D:\Git>cd practice

// D:\Git\practice>type nul > index.html

// D:\Git\practice>git status
// On branch master

// No commits yet

// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         index.html

// nothing added to commit but untracked files present (use "git add" to track)

// D:\Git\practice>git add 'index.html'
// fatal: pathspec ''index.html'' did not match any files

// D:\Git\practice>git add "index.html"

// D:\Git\practice>git status
// On branch master

// No commits yet

// Changes to be committed:
//   (use "git rm --cached <file>..." to unstage)
//         new file:   index.html


// D:\Git\practice>git rm --cached index.html
// rm 'index.html'

// D:\Git\practice>git status
// On branch master

// No commits yet

// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         index.html

// nothing added to commit but untracked files present (use "git add" to track)

// D:\Git\practice>git add "index.html"

//git rm --cached * (to untrack all files in one go)