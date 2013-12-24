## Unix / Unix-Like Cheat Sheet ##

A really simple guide to quick commands in Unix and Unix-Like environments i.e. Linux, Solaris etc. 

#### Contents ####

[1. Files & Directories]()  
[2. Finding & Searching]()  
[3. User Management]()  
[4. Permissions]()  
[5. Environment Paths]()  
[6. Miscellaneous]()  

#### Files & Directories ####

Changing directory;

	> cd myDirectory

Making directory;

	> mkdir -p myDirectory/mySubDirectory	# Creates both directories

Go back to previous directory;

	> cd -

Go up N levels;

	> cd ../		# Go up one level
	> cd ../../		# Go up two levels
	> cd ../../../	# Go up three levels

Removing Directory;

	# '-rf' forces the removal of that directory without having the  
	# need to approve the removal of each file within the directory.
 
	> rm -rf myDirectory

Removing File;

	> rm myFile.txt

Renaming Directory / Files;

	> mv myOldDirectory myNewDirectory
	> mv myOldFile.txt myNewFile.txt

Moving Directory / File;

	> mv myDirectory/ myOtherDirectory/		# Moves 'myDirectory' into 'myOtherDirectory'
	> mv myFile.txt /myDirectory/			# Moves 'myFile.txt' into 'myDirectory'
	
Creating new File;

	> touch myNewFile.txt

Linking Directory / File;

	# '-s' indicates a soft link.

	> ln -s myDirectory/mySubDirectory myCurrentDirectory/.
	> ln -s myDirectory/myFile.txt myCurrentDirectory/.

Copying Directory / File;

	> cp -rf myDirectory1/ myDirectory2/			# Copy myDirectory1 into myDirectory2
	> cp -f myDirectory1/myFile1.txt myDirectory2/

	# Copies entire contents of current directory including any softlinks and place
	# it into myDirectory. The pipe '|' allows the results from 'find . depth' to get brought over and copied.
	> find . -depth | cpio -pdmv myDirectory

Pushing & Popping directories;

	> pushd .		# Saves current directory into stack
	> popd			# Releases saved directory from stack

#### Finding & Searching ####

Finding Files;

	> find . -name 'myFile.txt' -print			# Attempts to find file in current directory
	> find ./myDirectory -name '*.txt' -print	# Attempts to find all files of .txt extension in myDirectory

Finding Directories;

	> find . -type d -print					# Finds all directories present in current directory
	> find ./myDirectory -type d -print		# Finds all directories present in myDirectory

Searching for a text in a file;

	> grep -i 'hello world' myFile.txt		# Searches for the string (case-insensitive) in myFile
	> grep 'hello world' */*				# Searches for the string, 'hello world' in all sub-directories

#### User Management ####

Create User;

	# NB: In order to add a new user, you must have root priviledges
	> useradd newName
	> useradd -n newName
	> passwd ************

	> grep newName /etc/passwd

Delete User;

	> userdel userName
	> userdel -r userName

Switch User;

	> su username		# Switch to username on host machine
	> su -				# Switch to the root user

Show current user on machine;

	> id				# Displays current user

#### Permissions ####

Allow write permissions;

Allow read / execute permissions;

Allow all permissions;


#### Network ####

Show Network info;

	> ifconfig -a

Ping remote machine;

	# 'address' is the IP of the machine e.g. 192.168.500.2
	> ping address 		# Check if remote machine is alive

SSH into a remote machine;

	# '-l' is the username to specify during log in
	# 'remote_machine' is an IP address
	> ssh -l username remote_machine

#### Environment Paths ####

Displays all Paths / Variables in the environment;

	> env

Displays the contents of the $PATH variable;

	> echo $PATH

Creates a new variable;

	> export VARIABLE=name

Appends myDirectory to existing PATH variable;

	> export PATH=/myDirectory:$PATH

#### Miscellaneous ####

Determine if exists, where executable resides;

	> which myExecutable

Show System info;

	> uname -a

Show current Time & Date;

	> date

Show calendar;

	> cal

Show all processes running on your system;

	> ps							# Show running processes
	> ps -ef						# Shows all processes
	> ps -ef | grep -i username		# Shows all processes under username






