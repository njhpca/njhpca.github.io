## Quick start
Here is the website we are building (http://www.njhpca.org or http://www.hpchinese.org)

1. create a bitbucket.org account  and let me know your name associated with the account
2. install git.  https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
3. Play a lit bit git from the command line and focus on the following commands. https://www.youtube.com/watch?v=SWYqp7iY_Tc
git init
git branch
git add
git commit
git log
git push
git fetch
git pull
git clean

4. clone the website from repository to your local machine
git clone https://bitbucket.org/houyang/njhpca.git
open index.html from your browser to navigate 

5. Do a small change on file README.MD,  commit the change and push to remote from the command line. 
git checkout development
git branch -b <yourname>-test1
git add README.MD
git commit -a -m 'my first commit'
git push origin <yourname>-test1


6. If you do not have basic HTML knowledge, you may check here https://www.youtube.com/watch?v=UB1O30fR-EE


## Steps to make a change for prodution site1. 
1. create a new branch locally from the latest "develop" branch based on the issue number. For example, if the issue you are working on is #123, 
git checkout develop
git fetch
git pull origin develop
git branch -b <yourusername>-<issuenumber>-<simple description>

for example:
git branch -b annagao-123-zipcode
Note: Your git version may not need the "-b" flag.

2. Modify the files in your IDE and test your changes in a browser.
You need to open the index.html from a browser and navigate to the page you changed.
You also need to adjust the browser window size to simulate the size of the iPad, phone to make sure the changes you did work fine for both desktop computers and mobile devices like ipads and phones

3. After you verify and test the changes, do the following to commit the changes, and then push the new local branch you created to the remote repository.
git add .
git commit -a -m "123: add zip code"
git push origin annagao-123-zipcode

4. From bitbucket(https://bitbucket.org/houyang/njhpca/branches/), select the branch you just pushed, created the pull request to develop branch (NOT master branch).

5. After the pull request is reviewed and approved. Merge the PR from bitbucket.


6. Mark the issue as Resolved from https://bitbucket.org/houyang/njhpca/issues?status=new&status=open

##Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: 
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).
