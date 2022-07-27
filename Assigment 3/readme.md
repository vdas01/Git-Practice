
Microsoft Windows [Version 10.0.19043.1826]
(c) Microsoft Corporation. All rights reserved.

D:\Git>code .

D:\Git>mkdir "Assigment 3"

D:\Git>cd "Assigment 3"

D:\Git\Assigment 3>type nul > index.html

D:\Git\Assigment 3>type nul > readme.md

D:\Git\Assigment 3>cd ..

D:\Git>git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        1.JPG
        Assigment 3/

nothing added to commit but untracked files present (use "git add" to track)

D:\Git>git add "Assigment 3"

D:\Git>git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Assigment 3/index.html
        new file:   Assigment 3/readme.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        1.JPG


D:\Git>git commit "Pull and push"
error: pathspec 'Pull and push' did not match any file(s) known to git

D:\Git>git commit -m "Pull and Push"
[main a9a8f76] Pull and Push
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 Assigment 3/index.html
 create mode 100644 Assigment 3/readme.md

D:\Git>git push origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 359 bytes | 119.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/vdas01/Git-Practice.git
   d77c609..a9a8f76  main -> main

D:\Git>notepad readme.md

D:\Git>cd "Assigment 3"

D:\Git\Assigment 3>notepad readme.md

D:\Git\Assigment 3>cd ..

D:\Git>git status
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   Assigment 3/readme.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        1.JPG

no changes added to commit (use "git add" and/or "git commit -a")

D:\Git>git add "Assigment 3/readme.md"

D:\Git>git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   Assigment 3/readme.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        1.JPG


D:\Git>git commit -m "Readme modified"
[main 198492d] Readme modified
 1 file changed, 1 insertion(+)

D:\Git>git push origin main
To https://github.com/vdas01/Git-Practice.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/vdas01/Git-Practice.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

D:\Git>git pull origin main
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 726 bytes | 3.00 KiB/s, done.
From https://github.com/vdas01/Git-Practice
 * branch            main       -> FETCH_HEAD
   a9a8f76..de76793  main       -> origin/main
Auto-merging Assigment 3/readme.md
CONFLICT (content): Merge conflict in Assigment 3/readme.md
Automatic merge failed; fix conflicts and then commit the result.

D:\Git>notepad "Assigment 3/readme.md"

D:\Git>git push origin main
To https://github.com/vdas01/Git-Practice.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/vdas01/Git-Practice.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

D:\Git>git pull origin main
error: Pulling is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.

D:\Git>git status
On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   Assigment 3/readme.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        1.JPG

no changes added to commit (use "git add" and/or "git commit -a")

D:\Git>git add "Assigment 3/readme.md"
warning: LF will be replaced by CRLF in Assigment 3/readme.md.
The file will have its original line endings in your working directory

D:\Git>git commit -m "Resolved conflict"
[main 0d8a236] Resolved conflict

D:\Git>git push origin main
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 716 bytes | 238.00 KiB/s, done.
Total 8 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/vdas01/Git-Practice.git
   de76793..0d8a236  main -> main

D:\Git>









