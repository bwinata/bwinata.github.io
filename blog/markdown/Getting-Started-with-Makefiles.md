## Getting Started with Makefiles using C ##
 
**Before you get started**

Make sure you have the following;

* Terminal - Linux, Unix-like, Cygwin
* Make utitlity (Most OSes typically have this already installed)
* GCC Toolchain
* Text Editor or IDE

**What the heck are Makefiles?**

A Makefile is a special type of file responsible for building executable software from compilation based source code. Makefiles are typically created in conjunction with the **make** utitlity which was originally released by Stuart Feldman in 1976 with Bell Labs. Moreover since that time, due to its ease of use and gaining of popularity, the utility along with its Makefiles has since been integrated into Linux and other Unix like Operating Systems for use by developers.
 
Despite the noted title above, Makefiles can be used for building software under other various languages i.e. C, C++, Objective-C etc. 

**What are they good for?**

Makefiles are incredibly effective and efficient in building software from source. Some of their benefits include; 

* Enables developers to easily scale up their software without worrying about too much on writing complex scripts for compilation. 
* Easily allows for large code bases to be compiled. 
* Provides a method of automating most, if not all of the hard work in finding source files, linking / archiving libraries, cleaning and dependency management.
* Portability. Provided the make utility is available, Makefiles can be executed on different platforms. 
* The language is succinct, which means that developers can easily compile their application with only a few directives, thus allowing for greater readability and modularity.

**Why should I care?**

Because it'll save your life! 

Actually probably not, but it will definitely make your life a whole lot easier and make you stand out from the crowd. If you're a developer or simply beginning to program, being able to write even basic Makefiles is a huge advantage and a language you should store in your arsenal. Not only this, but Makefiles form the foundation of how most of the libraries your Operating System, be it Windows, Linux, BSD, Solaris etc. use in order to function correctly on a day-day basis. 

Finally, Makefiles will give you a better appreciation and understanding of how applications are compiled. From the building of basic executables, compiling and linking object files to creating static and dynamic libraries, these types of files will help you identify what is being built which may potentially support in debugging activities, application enhancement and unit testing.

**Some Examples**

Okay that's enough of the the small talk. Let's do a litte bit of coding just to get started. 

Just to show you how easy it is to start learning, we'll be starting off small and will slowly be progressing through the stages and will finally be making a fully fledged executable using advanced Makefile techniques.  

Let's go!

**1. Basic**

We're going to start off by building a really simple C program using a Makefile. Don't worry if you're not too well versed in C. This article is more about **make** than anything else, so I'll be sure to explain what's happening as you follow through.

> Basic C Program - factorial.c

	/***************************************************************
	 * Filename: factorial.c
	 * -------------------------------------------------------------
	 * Description:
	 * 	A simple program which calculates the factorial of a number
	 * 	provided by a user which must be between 0 and 10.
	 ***************************************************************/

	#include <stdio.h>
	#include <stdlib.h>
	
	int factorial (int input) {
		int result = input;
		while (input != 1) {
			result *= input - 1;
			input--;
		}
		return result;
	}

	int main (int argc, char ** argv) {
		int input;
		
		printf ("This is a simple factorial program compiled using Makefiles\n\n");
		printf ("===========================================================\n");
		printf ("Enter any integer between 0 - 10\n");
		scanf (&input);

		if (input > 0 || input < 10) {
			printf ("The factorial of %d is %d\n", input, factorial (input));
		} else {
			fprintf (stderr, "Number is out of bounds...Exiting\n");
			return (1);
		}
		return (0);
	}


Basically all this program (`factorial.c`) does is calculate the factorial of a number specified by the user. The number must be between 0 and 10. The function - `main` simply provides the entry point to the program. THe `factorial` function does the actual calculation and returns the answer.

Okay, so that's enough about the code. How the heck do we compile this thing now? 

Because this code is located in only one file, building the application is going to be a piece of cake. Without the use of Makefile, simply run the following command in your terminal:  

	> gcc factorial.c -o factorial

Boom! There you have it, your application has just been built situated in your current working directory and is ready for use. Now before you say, "pfft...is that it, what's the point of a Makefile when I can just do that?", hang on a minute. As mentioned previously, this being a single source file, compiling this code with Makfiles seems a bit too much of an overkill. Make really comes into its own when the code base spans multiple files (I mean a lot) with increasing complexity and dependencies as we'll see shortly. However, in any case, because this article revolves around the use of make, we're going to write a Makefile to compile the above code for completeness.

To begin, simply create a file called `Makefile`. On the terminal window you can use the following command;

	> touch Makefile

> Basic Makefile

	##########################################################
	# Basic Makefile
	# --------------------------------------------------------
	# A simple Makefile responsible for demonstrating
	# how some simple source code can be compiled into an
	# application.
	##########################################################
	
	CC 		= gcc			# Specify the compiler
	APP		= factorial		# Name of the application

	# Entry point
	all:
		$(CC) factorial.c -o $(APP)

	# Remove application from release directory
	clean:
		rm -rf $(APP)

Here we have a simple Makefile that builds exactly the sample application as before albeit with the addition of a few more lines. We'll go through each line together.

The first couple of lines provide some comments on the Makefile. This is then followed by two definitions - `CC` which specifies which compiler to use. In this case we've chosen to use the GCC C Compiler, however other compilers are also permitted. `APP` defines the name of the application. 

The next part is the important bit which represents a directive. A directive is simply a call made by the make utility to the Makefile. In this case, the `all` directive marks the entry point to the file and anything under that directive will be executed. Hence the the source is to be compiled and thus produce the executable.

Finally, the last directive provides the call to remove the application from your directory.

In order to run the Makefile, run the following command;

	> make all

Here, the make utility will scavenge through the current directory for any related Makefiles. If found, the `all` directive will be called on that file, otherwise an exception will be created. There you have it. A really simple Makefile ready to build your application. 

Continue reading if you want to find out even more on Makefiles and its awesome power.  

> 
**Important**:   
1. When calling a definition, it must be surrounded by braces, preceded by a `$`. eg. `$(CC)`.  
2. Indentations are sensitive and should tabbed (8 spaces).

**2. Intermediate**

So far, what have we shown? We've demonstrated how easy it is to build an application with Makefiles using definitions and simple directives. Next, we'll venture into how Makefiles can compile programs from multiple files and locations as well as begin to create applications from object files. 

To make things convenient and simpler, we'll continue on with our previous application - `factorial` and slowly extend its code base for this example. 

> **C Program**  
> factorial.c

	/***************************************************************
	 * Filename: factorial.c
	 * -------------------------------------------------------------
	 * Description:
	 * 	A simple program which calculates the factorial of a number
	 * 	provided by a user which must be between 0 and 10.
	 ***************************************************************/

	int factorial (int input) {
		int result = input;
		while (input != 1) {
			result *= input - 1;
			input--;
		}
		return result;
	}
 
> factorial_main.c

	/***************************************************************
	 * Filename: factorial_main.c
	 * -------------------------------------------------------------
	 * Description:
	 * 	A simple program which calculates the factorial of a number
	 * 	provided by a user which must be between 0 and 10.
	 ***************************************************************/

	int main (int argc, char ** argv) {
		int input;
		
		printf ("This is a simple factorial program compiled using Makefiles\n\n");
		printf ("===========================================================\n");
		printf ("Enter any integer between 0 - 10\n");
		scanf (&input);

		if (input > 0 || input < 10) {
			printf ("The factorial of %d is %d\n", input, factorial (input));
		} else {
			fprintf (stderr, "Number is out of bounds...Exiting\n");
			return (1);
		}
		return (0);
	}

Going on from our previous example, we have now split the code into two source files - `factorial.c`, containing the factorial function and `factorial_main.c`, the entry point into the program. Despite this very mundane example, this demonstrates the power of Makefiles with multiple files and is really a stepping stone for large software projects spanning hundreds of files.

> Makefile

	##########################################################
	# Intermediate Makefile
	# --------------------------------------------------------
	# A Makefile responsible for demonstrating
	# how some source code can be compiled into an
	# application from object files.
	##########################################################
	
	# Definitions
	CC 		= gcc				# Specify the compiler
	CFLAGS	= -g -w -Wall		# Compiler Flags
	APP		= My_Factorial_App	# Name of the application
	OBJS	= factorial.o		# Object file

	# Entry point
	all: $(APP)

	# Dependencies
	$(APP): $(OBJS)
		@echo "Building $@ ..."
		$(CC) $(CFLAGS) -o $@ factorial_main.c $(OBJS)

	$(OBJS):
		@echo "Making $@ ..."
		$(CC) $(CFLAGS) -o $@ -c factorial.c

	# Remove application from release directory
	clean:
		rm -rf $(APP)
		rm -rf *.o

For the most part, the above file seems very familiar to the previous Makefile. Again, the exact same application is to be created, however now using two sources file and some additional directives.

**`CFLAGS`** - provides compiler flags to deliver warnings during compilation. These flags are compiler dependent and may change.  

**`OBJS`** - The desired object file to be created. Note that definitions can contain more than one item. For example, `$(OBJS)` can include `factorial.o object1.o object2.o objectN.o`.  

**`all: $(APP)`** - Instead of compiling under this directive, a dependency is used such that the entry point will call the `$(APP)` directive.
  
**`$(APP): $(OBJS)`** - This directive builds the application, but before it is allowed, the `$(OBJS)` dependency must be satisfied. If satisfied, then make will attempt to build the application by linking in the already created object file - `factorial.o` with `factorial_main.c` and produce the app - `My_Factorial_App`.
  
**`$(OBJS)`** -  This directive builds the object file `factorial.o` using `factorial.c` required for the application. THe `-c` indicates that the compiler will not attempt to link the object file but just simply build it.
   
**`$@`** - Is the name of the target (output). This is used to allow flexibility in producing different outputs using the same command line routines. So in the above Makefile, `...$@ factorial_main.c $(OBJS)` will attempt to create the app - `My_Factorial_App`.
   
**`@echo`** - Echoes a desired string.
   
**`clean:`** - cleans the release directory (current) of the app and any related object files. 

I hope that this Makefile demonstrates how powerful it can be to work with large projects. And through usage of definitions, dependency directives and object files shows that building applications shouldn't create a headache but really a straight forward task allowing you to focus your efforts on the real code.  

**3. Advanced**

This section will cover some Makefile techniques used typically in large software projects. Moreover, we will attempt to delve into dynamically compiling source code from any location as well as introduce methods of interfacing with both static and dynamic libraries. At the same time, we'll also introduce new commands to make life that much simpler (I hope).

> **C Program**  
> factorial.c

	/***************************************************************
	 * Filename: factorial.c
	 * -------------------------------------------------------------
	 * Description:
	 * 	A simple program which calculates the factorial of a number
	 * 	provided by a user which must be between 0 and 10.
	 ***************************************************************/

	int factorial (int input) {
		int result = input;
		while (input != 1) {
			result *= input - 1;
			input--;
		}
		return result;
	}

 
> fibonacci.c

	/***************************************************************
	 * Filename: fibonacci.c
	 * -------------------------------------------------------------
	 * Description:
	 * 	A simple program which calculates the factorial of a number
	 * 	provided by a user which must be between 0 and 10.
	 ***************************************************************/

	void fibonacci (void) {
		
	}


> main.c

	/***************************************************************
	 * Filename: main.c
	 * -------------------------------------------------------------
	 * Description:
	 * 	A simple program which calculates the factorial and 
	 * 	prints the fibonacii sequence of a number provided 
	 * 	by a user which must be between 0 and 10.
	 ***************************************************************/

	int main (int argc, char ** argv) {
		int input;
		
		printf ("This is a program compiled using Makefiles\n\n");
		printf ("===========================================================\n");
		printf ("Enter any integer between 0 - 10\n");
		scanf (&input);

		if (input > 0 || input < 10) {
			printf ("The factorial of %d is %d\n", input, factorial (input));
			printf ("The fibonacii sequence for %d iterations is\n", input);
			fibonacii (input); 
		} else {
			fprintf (stderr, "Number is out of bounds...Exiting\n");
			return (1);
		}
		return (0);
	}

> Makefile

	##########################################################
	# Advanced Makefile
	# --------------------------------------------------------
	# A Makefile responsible for demonstrating
	# how some source code can be compiled into an
	# application from object files dynamically.
	##########################################################
	
	# Definitions
	CURRENT = ${shell pwd}			# Current working directory
	RELEASE = $(CURRENT)/release	# Release directory
	CC 		= gcc					# Specify the compiler
	CFLAGS	= -g -w -Wall			# Compiler flags
	APP		= My_Application		# Name of the application
	EXT_LIB = /usr/lib				# External Libraries

	SOURCE	= ${shell find ./*.c -type f -print | sed 's:\./::g' | grep -v main.c}
	OBJS	= ${foreach pkg, $(SOURCE):.c=.o), $(RELEASE)/$(pkg)}

	# Entry point
	all: $(RELEASE) $(APP)

	# Dependencies
	$(RELEASE):
		mkdir -p $(RELEASE)

	$(APP): $(OBJS)
		@echo "Building $@ ..."
		$(CC) $(CFLAGS) -o $@ main.c $(OBJS)

	$(RELEASE)/factorial.o:
		@echo "Making $@ ..."
		$(CC) $(CFLAGS) -o $@ -c factorial.c

	$(RELEASE)/fibonacci.o:
		@echo "Making $@ ..."
		$(CC) $(CFLAGS) -o $@ -c fibonacci.c

	# Remove application from release directory
	clean:
		rm -rf $(APP)
		rm -rf $(RELEASE)

Here, we have a more slightly extended Makefile. Also, just to expand the program, we've also created another source file - `fibonacci.c` in order to calculate the fibonacci sequence for a number of iterations based on the same number the user specifies to calculate the factorial. For example, a number 7 will calculate its associated factorial but also print out the fibonacci sequence for seven iterations. As such, two object files are created to represent these functions.

To make things even more realistic, another directory has been defined - `$(RELEASE)`, where the object files and final application will reside. A dependency for this folder has been placed along the `all` directive to ensure that this directory is created (`mkdir`) before any compilation.  

Previously, for convenience we hardcoded the object names into the Makefile, however these don't typically work with different files in multiple locations.  Therefore, we've implemented shell commands into the file - `${shell ...}`. Shell calls allow for Makefiles to perform system operations i.e. find, grep etc. For `SOURCE`, we did exactly this. The shell call finds all source files with extension .c and subsequently removes any prefixes  of `./`. In addition, it omits the source file - `main.c` using `grep` as this file will have no associated object file, but will get linked when building the application.

Once we determine all the source files, the next step is to convert them to object files. `OBJS` performs a native make call much like a for-loop which iterates through each of the files in `SOURCE` and converts them to objects. And it at this point we can begin building the dependencies. 

Now, you make interested in how `$(RELEASE)/factorial.o` and `$(RELEASE)/fibonacci.o` are created considering that these dependencies can't be traced back to `APP` like the previous Makefile. However, if you look closely, `OBJS` contain exactly these. If you were to expand `OBJS` out it would convert to - `$(APP) : $(RELEASE)/factorial.o $(RELEASE)/fibonacci.o`, revealing that the shell call under `OBJS` did exactly what it was supposed to do. 

So there you have it, a not so intermediate Makefile aimed at compiling multiple object files dynamically using the power of shell calls to perform system operations conveniently and effectively.  

---

I hope that this article helped just that little bit in understanding the power of Makefiles and perhaps got you writing some yourself. So thanks for stopping by and be sure to check out my other articles. 