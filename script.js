/*
 * Java Lab Academic Portfolio – P. Kristi Marlin (25EU02109)
 * labData below holds every week/program shown on the site. Edit it to update the portfolio.
 * Fields per experiment: id, title, topics[], and any of: aim, procedure[], code, output,
 * outputImages[], images[], result, note, table, sections[]. Missing fields are simply not shown.
 */
const labData = [
 {
  "week": "Week 1",
  "num": 1,
  "title": "Comparison of Programming Languages",
  "summary": "Feature comparison of Java, C, C++, Python and JavaScript.",
  "experiments": [
   {
    "id": "w1-1",
    "title": "Comparison of Java, C, C++, Python and JavaScript",
    "topics": [
     "Language comparison",
     "Compiler vs interpreter",
     "Memory management",
     "Platform independence"
    ],
    "table": {
     "headers": [
      "FEATURES",
      "JAVA",
      "C",
      "C++",
      "PYTHON",
      "JAVASCRIPT"
     ],
     "rows": [
      [
       "Language / Scripting",
       "Programming language",
       "Programming language",
       "Programming language",
       "Scripting language",
       "Scripting language"
      ],
      [
       "Open Source or Commercial",
       "Mixed",
       "Open source",
       "Open source",
       "Open source",
       "Mixed"
      ],
      [
       "Compiler or Interpreter",
       "Compiler",
       "Compiler",
       "Compiler",
       "Interpreter",
       "Interpreter"
      ],
      [
       "Object-Oriented Programming Support",
       "Yes",
       "No",
       "Yes",
       "Yes",
       "Yes"
      ],
      [
       "Developer Organization",
       "Sun Microsystems",
       "AT&T Bell labs",
       "AT&T Bell labs",
       "Python Software Foundation",
       "Netscape"
      ],
      [
       "Developer (Person)",
       "James Gosling",
       "Dennis Ritchie",
       "Bjorne Stroustrup",
       "Guido Van Rossom",
       "Brenden Eich"
      ],
      [
       "Current Major Version",
       "Java 26",
       "C23",
       "C++26",
       "Python 3.14",
       "ECMAScript 2026"
      ],
      [
       "Primary Purpose",
       "secure enterprise software",
       "provides direct hardware control for low-level systems",
       "powers resource-intensive, high-performance engines",
       "Serves as the primary tool for data science and AI",
       "the indispensable core of interactive web applications"
      ],
      [
       "Common Applications",
       "Enterprise Software, Android Ecosystem, Cloud",
       "Operating Systems, Embedded Systems, Hardware",
       "Game Engines, High-Performance Systems, Graphics",
       "AI, Data Science, Backend Web, Automation",
       "Frontend & Backend Web, Cross-Platform Mobile"
      ],
      [
       "Database Support",
       "Yes",
       "Yes",
       "Yes",
       "Yes",
       "Yes"
      ],
      [
       "Memory Management",
       "Garbage Collection",
       "Manual",
       "Manual",
       "Garbage Collection",
       "Garbage Collection"
      ],
      [
       "Security Features",
       "High",
       "Low",
       "Low",
       "High",
       "Medium"
      ],
      [
       "Performance",
       "Very Fast",
       "Fastest",
       "Near-Identical to C",
       "Slowest",
       "Moderate"
      ],
      [
       "Platform Independence",
       "Yes",
       "No",
       "No",
       "Yes",
       "Yes"
      ],
      [
       "Other Important Features",
       "Write Once, Run Anywhere, Robust Ecosystem",
       "Hardware Interfacing, Ultra-low Footprint",
       "Multi-Paradigm Engine, Deterministic Destructors",
       "Human-Centric Syntax, Batteries Included",
       "Universal Browser Execution, Non-Blocking I/O"
      ],
      [
       "Ease of Learning",
       "Moderate",
       "Hard",
       "Very Hard",
       "Very Easy",
       "Easy"
      ],
      [
       "Popular IDEs",
       "IntelliJ IDEA",
       "CLion",
       "CLion",
       "PyCharm",
       "WebStorm"
      ],
      [
       "Compilation Output",
       "Bytecode",
       "Machine Code",
       "Machine Code",
       "Bytecode",
       "Just-In-Time Machine Code"
      ],
      [
       "Advantages",
       "Memory Safety, Strict Structure",
       "Maximum Performance, Foundational Logic",
       "STL Power, Predictable Latency",
       "High Readability, AI Dominance",
       "Browser Native, Full-Stack Capability"
      ],
      [
       "Limitations",
       "High memory footprint & heavy boilerplate code",
       "Lacks Object-Oriented Programming (OOP) and safety checks",
       "Immense syntactic and management complexity",
       "Poor execution speed & multi-core utilization",
       "Client-side security gaps & cross-browser discrepancies"
      ]
     ]
    },
    "sections": [
     {
      "heading": "Unique Features",
      "list": [
       "Java: JVM portability.",
       "C: Direct hardware access.",
       "C++: Templates/STL.",
       "Python: Simple syntax and AI ecosystem.",
       "JavaScript: Native web scripting."
      ]
     },
     {
      "heading": "Best Suited For",
      "list": [
       "System Programming: C/C++",
       "Enterprise Applications: Java",
       "Web Development: JavaScript",
       "Artificial Intelligence: Python",
       "Mobile Application Development: Java"
      ]
     },
     {
      "heading": "Conclusion",
      "text": "Java, C, C++, Python, and JavaScript each serve different purposes. C and C++ excel in system programming and high-performance applications. Java is widely used for enterprise and Android development because of its portability and security. Python is preferred for artificial intelligence, automation, and data science due to its simplicity and extensive libraries. JavaScript dominates web development by enabling interactive client-side and server-side applications. Selecting the right language depends on project requirements such as performance, scalability, ease of development, and platform support."
     }
    ]
   }
  ]
 },
 {
  "week": "Week 2",
  "num": 2,
  "title": "Oracle JDK & OpenJDK",
  "summary": "Installing Java on Windows, configuring JAVA_HOME and running Hello World.",
  "experiments": [
   {
    "id": "w2-1",
    "title": "Installation of Java and Execution of a Simple Hello World Program (Windows) in Oracle JDK",
    "topics": [
     "Oracle JDK",
     "Java installation",
     "JAVA_HOME",
     "PATH",
     "java --version",
     "javac --version",
     "Hello World"
    ],
    "procedure": [
     "Open Google Chrome and visit the official Oracle JDK website (Oracle JDK Downloads).",
     "Click on the newest version of Java (Java 25) and click on the link on the website.",
     "Download the given version.",
     "Install JDK: click Next and follow the installation wizard, then complete the installation.",
     "Press Windows + R and type cmd.",
     "A Command window opens.",
     "Type java –version to see the version of Java.",
     "Type javac –version to see the version of javac.",
     "Verify Java installation: open files and select Local Disk (C:).",
     "Go to Program Files.",
     "In Program Files open Java; you can see that it has been created.",
     "Configuring Java on Windows (setting JAVA_HOME and PATH): press Windows + R and type sysdm.cpl.",
     "Click Environment Variables at the bottom right of the Advanced tab.",
     "Near System variables, click New.",
     "A New System Variable dialog opens.",
     "Enter the Variable name and Variable value.",
     "In System variables, select Path.",
     "Click New and enter %JAVA_HOME%\\bin, then click OK.",
     "Verify configuration: open the command window again and type echo %JAVA_HOME% — it is created; also check the Java version.",
     "To get the output “Hello”: open Visual Studio, write the code and save it as Hello.java.",
     "Open the command window and type cd desktop, then javac Hello.java, then java Hello to get the required output.",
     "The required output is obtained successfully."
    ],
    "images": [
     "assets/week2-oracle-01.jpg",
     "assets/week2-oracle-02.jpg",
     "assets/week2-oracle-03.jpg",
     "assets/week2-oracle-04.jpg",
     "assets/week2-oracle-05.jpg",
     "assets/week2-oracle-06.jpg",
     "assets/week2-oracle-07.jpg",
     "assets/week2-oracle-08.jpg",
     "assets/week2-oracle-09.jpg",
     "assets/week2-oracle-10.jpg",
     "assets/week2-oracle-11.jpg",
     "assets/week2-oracle-12.jpg",
     "assets/week2-oracle-13.jpg",
     "assets/week2-oracle-14.jpg",
     "assets/week2-oracle-15.jpg",
     "assets/week2-oracle-16.jpg",
     "assets/week2-oracle-17.jpg",
     "assets/week2-oracle-18.jpg",
     "assets/week2-oracle-19.jpg"
    ],
    "note": "The Hello.java source code and its output appear only as screenshots in the document; see the screenshots below."
   },
   {
    "id": "w2-2",
    "title": "Installation of Java and Execution of a Simple Hello World Program (Windows) in OpenJDK",
    "topics": [
     "OpenJDK",
     "Java installation",
     "JAVA_HOME",
     "java --version",
     "javac --version",
     "Hello World"
    ],
    "procedure": [
     "Step 1 – Download OpenJDK: open any web browser, visit the official OpenJDK website and download the latest stable OpenJDK for Windows (64-bit).",
     "Step 2 – Install OpenJDK: double-click the downloaded installer, follow the installation wizard, choose the installation location if required, click Install, wait for completion and click Finish.",
     "Step 3 – Configure environment variables (set JAVA_HOME): press Windows + R, type sysdm.cpl and press Enter; open the Advanced tab; click Environment Variables; under System Variables click New; enter Variable Name: JAVA_HOME and Variable Value (example): C:\\Program Files\\Eclipse Adoptium\\jdk-21.",
     "Step 4 – Verify the installation: open Command Prompt and type java --version; then check the Java compiler with javac --version.",
     "Execution of a simple Hello World program – Step 1: create a file named Hello.java and type the program; save with the .java extension.",
     "Step 2: open Command Prompt, navigate to the folder where the file is saved and compile with javac Hello.java. A file named Hello.class is generated after successful compilation.",
     "Step 3: run the program using java Hello."
    ],
    "code": "public class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}",
    "output": "java --version (sample output):\nopenjdk 21.0.11\n\njavac --version (sample output):\njavac 21.0.11\n\nProgram output:\nHello World",
    "images": [
     "assets/week2-openjdk-01.jpg",
     "assets/week2-openjdk-02.jpg",
     "assets/week2-openjdk-03.jpg",
     "assets/week2-openjdk-04.jpg",
     "assets/week2-openjdk-05.jpg",
     "assets/week2-openjdk-06.jpg",
     "assets/week2-openjdk-07.jpg",
     "assets/week2-openjdk-08.jpg",
     "assets/week2-openjdk-09.jpg"
    ]
   }
  ]
 },
 {
  "week": "Week 3",
  "num": 3,
  "title": "Basic Java Programs",
  "summary": "Primitive types, operators, type conversion and casting, control statements and keywords.",
  "experiments": [
   {
    "id": "w3-1",
    "title": "Program 1: Hello Java",
    "topics": [
     "Hello Java"
    ],
    "procedure": [
     "Create a Java file named Hello.java.",
     "Write the program to print \"Hello, Java!\".",
     "Compile the program using the javac command.",
     "Execute it using the java command.",
     "Observe the output."
    ],
    "aim": "To write and execute a Java program that displays \"Hello, Java!\" on the console.",
    "result": "The program was executed successfully and displayed \"Hello, Java!\" on the screen.",
    "outputImages": [
     "assets/week3-output-01.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-2",
    "title": "Program 2: Primitive Data Types",
    "topics": [
     "Primitive Data Types"
    ],
    "procedure": [
     "Declare variables of type byte, short, int, long, float, double, char, and boolean.",
     "Assign suitable values to each variable.",
     "Display the values using output statements.",
     "Compile and execute the program."
    ],
    "aim": "To declare variables of different primitive data types and display their values.",
    "result": "The values of all primitive data types were displayed successfully.",
    "outputImages": [
     "assets/week3-output-02.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-3",
    "title": "Program 3: Arithmetic Operations on Integers",
    "topics": [
     "Arithmetic Operations on Integers"
    ],
    "procedure": [
     "Declare two integer variables.",
     "Perform addition, subtraction, multiplication, division, and modulus operations.",
     "Display the results.",
     "Compile and run the program."
    ],
    "aim": "To perform arithmetic operations on two integer variables.",
    "result": "The arithmetic operations on integer variables were performed successfully.",
    "outputImages": [
     "assets/week3-output-03.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-4",
    "title": "Program 4: Arithmetic Operations on Floating-Point Numbers",
    "topics": [
     "Arithmetic Operations on Floating-Point Numbers"
    ],
    "procedure": [
     "Declare two floating-point variables.",
     "Perform basic arithmetic operations.",
     "Display the results.",
     "Compile and execute the program."
    ],
    "aim": "To perform arithmetic operations using floating-point numbers.",
    "result": "The arithmetic operations on floating-point numbers were executed successfully.",
    "outputImages": [
     "assets/week3-output-04.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-5",
    "title": "Program 5: Character and ASCII/Unicode Value",
    "topics": [
     "Character and ASCII/Unicode Value"
    ],
    "procedure": [
     "Declare a character variable.",
     "Convert the character to its ASCII/Unicode value.",
     "Display both the character and its value.",
     "Compile and run the program."
    ],
    "aim": "To display a character and its corresponding ASCII/Unicode value.",
    "result": "The character and its corresponding ASCII/Unicode value were displayed successfully.",
    "outputImages": [
     "assets/week3-output-05.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-6",
    "title": "Program 6: Boolean Variables",
    "topics": [
     "Boolean Variables"
    ],
    "procedure": [
     "Declare Boolean variables.",
     "Perform simple Boolean expressions.",
     "Display the results.",
     "Compile and execute the program."
    ],
    "aim": "To demonstrate the use of Boolean variables and Boolean expressions.",
    "result": "The Boolean values and expressions were displayed successfully.",
    "outputImages": [
     "assets/week3-output-06.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-7",
    "title": "Program 7: Variables",
    "topics": [
     "Variables"
    ],
    "procedure": [
     "Declare variables of different data types.",
     "Initialize them with suitable values.",
     "Display the values.",
     "Compile and execute the program."
    ],
    "aim": "To declare, initialize, and display different types of variables.",
    "result": "The values of different variables were displayed successfully.",
    "outputImages": [
     "assets/week3-output-07.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-8",
    "title": "Program 8: Swapping Two Variables",
    "topics": [
     "Swapping Two Variables"
    ],
    "procedure": [
     "Declare two variables.",
     "Use a temporary variable to swap their values.",
     "Display the values before and after swapping.",
     "Compile and run the program."
    ],
    "aim": "To swap the values of two variables using a temporary variable.",
    "result": "The values of the two variables were swapped successfully.",
    "outputImages": [
     "assets/week3-output-08.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-9",
    "title": "Program 9: Widening Type Conversion",
    "topics": [
     "Widening Type Conversion"
    ],
    "procedure": [
     "Declare variables of smaller data types.",
     "Assign them to larger data types.",
     "Display the converted values.",
     "Compile and execute the program."
    ],
    "aim": "To demonstrate automatic (widening) type conversion.",
    "result": "Automatic type conversion was performed successfully.",
    "outputImages": [
     "assets/week3-output-09.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-10",
    "title": "Program 10: Narrowing Type Casting",
    "topics": [
     "Narrowing Type Casting"
    ],
    "procedure": [
     "Declare a variable of a larger data type.",
     "Convert it to a smaller data type using type casting.",
     "Display the converted value.",
     "Compile and run the program."
    ],
    "aim": "To demonstrate explicit (narrowing) type casting.",
    "result": "Explicit type casting was demonstrated successfully.",
    "outputImages": [
     "assets/week3-output-10.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-11",
    "title": "Program 11: Character to ASCII/Unicode Conversion",
    "topics": [
     "Character to ASCII/Unicode Conversion"
    ],
    "procedure": [
     "Declare a character and an integer value.",
     "Perform type casting between character and integer.",
     "Display the converted values.",
     "Compile and execute the program."
    ],
    "aim": "To convert a character to its ASCII/Unicode value and vice versa.",
    "result": "The character and ASCII/Unicode conversions were performed successfully.",
    "outputImages": [
     "assets/week3-output-11.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-12",
    "title": "Program 12: Even or Odd",
    "topics": [
     "Even or Odd"
    ],
    "procedure": [
     "Declare an integer variable.",
     "Use an if-else statement to check whether the number is even or odd.",
     "Display the result.",
     "Compile and run the program."
    ],
    "aim": "To check whether a given number is even or odd using the if-else statement.",
    "result": "The program correctly identified whether the number was even or odd.",
    "outputImages": [
     "assets/week3-output-12.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-13",
    "title": "Program 13: Largest of Two Numbers",
    "topics": [
     "Largest of Two Numbers"
    ],
    "procedure": [
     "Declare two integer variables.",
     "Compare them using if-else statements.",
     "Display the larger number.",
     "Compile and execute the program."
    ],
    "aim": "To find the largest of two numbers using the if-else statement.",
    "result": "The larger of the two numbers was displayed successfully.",
    "outputImages": [
     "assets/week3-output-13.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-14",
    "title": "Program 14: Java Reserved Keywords",
    "topics": [
     "Java Reserved Keywords"
    ],
    "procedure": [
     "Create valid variable names.",
     "Observe that Java keywords cannot be used as identifiers.",
     "Compile and execute the program.",
     "Note the output or compiler behavior."
    ],
    "aim": "To demonstrate the use of Java reserved keywords and understand why they cannot be used as variable names.",
    "result": "The program demonstrated the use of valid identifiers and the restriction on Java keywords.",
    "outputImages": [
     "assets/week3-output-14.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   },
   {
    "id": "w3-15",
    "title": "Program 15: For Loop",
    "topics": [
     "For Loop"
    ],
    "procedure": [
     "Write a for loop to iterate from 1 to 10.",
     "Display each number.",
     "Compile and execute the program.",
     "Observe the output."
    ],
    "aim": "To demonstrate the use of the for loop by displaying numbers from 1 to 10.",
    "result": "The numbers from 1 to 10 were displayed successfully.",
    "outputImages": [
     "assets/week3-output-15.jpg"
    ],
    "note": "Source code is not included in the document; the output is shown as a screenshot."
   }
  ]
 },
 {
  "week": "Week 6",
  "num": 6,
  "title": "Classes, Objects, Methods & References",
  "summary": "Classes and objects, references, methods, constructors, this, garbage collection, overloading, static, final and nested classes.",
  "experiments": [
   {
    "id": "w6-1.1",
    "title": "Program 1.1: Student Information System",
    "topics": [
     "Student Information System",
     "StudentInfo"
    ],
    "code": "class Student {\n    int rollNo;\n    String name;\n    String branch;\n    double cgpa;\n    void display() {\n        System.out.println(\"Roll Number: \" + rollNo);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Branch: \" + branch);\n        System.out.println(\"CGPA: \" + cgpa);\n    }\n}\npublic class StudentInfo {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.rollNo = 101;\n        s.name = \"Raina\";\n        s.branch = \"CSE-AIML\";\n        s.cgpa = 9.2;\n        s.display();\n    }\n}",
    "output": "Roll Number: 101\nName: Raina\nBranch: CSE-AIML\nCGPA: 9.2"
   },
   {
    "id": "w6-1.2",
    "title": "Program 1.2: Employee Information System",
    "topics": [
     "Employee Information System",
     "EmployeeInfo"
    ],
    "code": "class Employee {\n    int employeeId;\n    String name;\n    String department;\n    double salary;\n    void display() {\n        System.out.println(\"Employee ID: \" + employeeId);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Department: \" + department);\n        System.out.println(\"Salary: \" + salary);\n    }\n}\npublic class EmployeeInfo {\n    public static void main(String[] args) {\n        Employee e = new Employee();\n        e.employeeId = 101;\n        e.name = \"Raina\";\n        e.department = \"IT\";\n        e.salary = 50000;\n        e.display();\n    }\n}",
    "output": "Employee ID: 101\nName: Raina\nDepartment: IT\nSalary: 50000.0"
   },
   {
    "id": "w6-2.1",
    "title": "Program 2.1: Book Details",
    "topics": [
     "Book Details",
     "BookDetails"
    ],
    "code": "class Book {\n    String title;\n    String author;\n    double price;\n    void display() {\n        System.out.println(\"Title: \" + title);\n        System.out.println(\"Author: \" + author);\n        System.out.println(\"Price: \" + price);\n        System.out.println();\n    }\n}\npublic class BookDetails {\n    public static void main(String[] args) {\n        Book b1 = new Book();\n        Book b2 = new Book();\n        Book b3 = new Book();\n        b1.title = \"Java Programming\";\n        b1.author = \"James Gosling\";\n        b1.price = 500;\n        b2.title = \"Python Basics\";\n        b2.author = \"John Smith\";\n        b2.price = 400;\n        b3.title = \"Data Structures\";\n        b3.author = \"Mark Allen\";\n        b3.price = 600;\n        b1.display();\n        b2.display();\n        b3.display();\n    }\n}",
    "output": "Title: Java Programming\nAuthor: James Gosling\nPrice: 500.0\nTitle: Python Basics\nAuthor: John Smith\nPrice: 400.0\nTitle: Data Structures\nAuthor: Mark Allen\nPrice: 600.0"
   },
   {
    "id": "w6-2.2",
    "title": "Program 2.2: Array of Student Objects",
    "topics": [
     "Array of Student Objects",
     "StudentArray"
    ],
    "code": "import java.util.Scanner;\nclass Student {\n    int rollNo;\n    String name;\n    String branch;\n    void display() {\n        System.out.println(\"Roll Number: \" + rollNo);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Branch: \" + branch);\n        System.out.println();\n    }\n}\npublic class StudentArray {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student[] students = new Student[5];\n        for (int i = 0; i < 5; i++) {\n            students[i] = new Student();\n            System.out.println(\"Enter details of Student \" + (i + 1));\n            System.out.print(\"Roll Number: \");\n            students[i].rollNo = sc.nextInt();\n            sc.nextLine();\n            System.out.print(\"Name: \");\n            students[i].name = sc.nextLine();\n            System.out.print(\"Branch: \");\n            students[i].branch = sc.nextLine();\n        }\n        System.out.println(\"\\nStudent Details:\");\n        for (int i = 0; i < 5; i++) {\n            students[i].display();\n        }\n        sc.close();\n    }\n}",
    "output": "Enter details of Student 1\nRoll Number: 101\nName: Raina\nBranch: CSE-AIML\nEnter details of Student 2\nRoll Number: 102\nName: Rinku\nBranch: CSE\nEnter details of Student 3\nRoll Number: 103\nName: Ananya\nBranch: CSE-AIML\nEnter details of Student 4\nRoll Number: 104\nName: Kiran\nBranch: ECE\nEnter details of Student 5\nRoll Number: 105\nName: Priya\nBranch: IT\nStudent Details:\nRoll Number: 101\nName: Raina\nBranch: CSE-AIML\nRoll Number: 102\nName: Rinku\nBranch: CSE\nRoll Number: 103\nName: Ananya\nBranch: CSE-AIML\nRoll Number: 104\nName: Kiran\nBranch: ECE\nRoll Number: 105\nName: Priya\nBranch: IT"
   },
   {
    "id": "w6-3.1",
    "title": "Program 3.1: Reference Assignment",
    "topics": [
     "Reference Assignment",
     "ReferenceAssignment"
    ],
    "code": "class Student {\n    String name;\n    void display() {\n        System.out.println(\"Name: \" + name);\n    }\n}\npublic class ReferenceAssignment {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.name = \"Raina\";\n        Student s2 = s1;\n        System.out.println(\"Before modification:\");\n        s2.display();\n        s1.name = \"Rinku\";\n        System.out.println(\"After modification:\");\n        s2.display();\n    }\n}",
    "output": "Before modification:\nName: Raina\nAfter modification:\nName: Rinku"
   },
   {
    "id": "w6-3.2",
    "title": "Program 3.2: Comparing Object References",
    "topics": [
     "Comparing Object References",
     "CompareReferences"
    ],
    "code": "class Employee {\n    int id;\n    String name;\n    Employee(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n}\npublic class CompareReferences {\n    public static void main(String[] args) {\n        Employee e1 = new Employee(101, \"Rahul\");\n        Employee e2 = e1;\n        if (e1 == e2) {\n            System.out.println(\"Both references point to the same object.\");\n        } else {\n            System.out.println(\"References point to different objects.\");\n        }\n    }\n}",
    "output": "Both references point to the same object."
   },
   {
    "id": "w6-4.1",
    "title": "Program 4.1: Calculator Using Methods",
    "topics": [
     "Calculator Using Methods",
     "CalculatorDemo"
    ],
    "code": "class Calculator {\n    int add(int a, int b) {\n        return a + b;\n    }\n    int subtract(int a, int b) {\n        return a - b;\n    }\n    int multiply(int a, int b) {\n        return a * b;\n    }\n    double divide(int a, int b) {\n        return (double) a / b;\n    }\n}\npublic class CalculatorDemo {\n    public static void main(String[] args) {\n        Calculator c = new Calculator();\n        int a = 20;\n        int b = 10;\n        System.out.println(\"Addition: \" + c.add(a, b));\n        System.out.println(\"Subtraction: \" + c.subtract(a, b));\n        System.out.println(\"Multiplication: \" + c.multiply(a, b));\n        System.out.println(\"Division: \" + c.divide(a, b));\n    }\n}",
    "output": "Addition: 30\nSubtraction: 10\nMultiplication: 200\nDivision: 2.0"
   },
   {
    "id": "w6-4.2",
    "title": "Program 4.2: Rectangle Operations",
    "topics": [
     "Rectangle Operations",
     "RectangleDemo"
    ],
    "code": "class Rectangle {\n    double length;\n    double width;\n    double area() {\n        return length * width;\n    }\n    double perimeter() {\n        return 2 * (length + width);\n    }\n    void display() {\n        System.out.println(\"Area: \" + area());\n        System.out.println(\"Perimeter: \" + perimeter());\n    }\n}\npublic class RectangleDemo {\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle();\n        r.length = 10;\n        r.width = 5;\n        r.display();\n    }\n}",
    "output": "Area: 50.0\nPerimeter: 30.0"
   },
   {
    "id": "w6-5.1",
    "title": "Program 5.1: Student Constructors",
    "topics": [
     "Student Constructors",
     "StudentConstructor"
    ],
    "code": "class Student {\n    String name;\n    int rollNo;\n    Student() {\n        name = \"Unknown\";\n        rollNo = 0;\n    }\n    Student(String name, int rollNo) {\n        this.name = name;\n        this.rollNo = rollNo;\n    }\n    void display() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Roll Number: \" + rollNo);\n    }\n}\npublic class StudentConstructor {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        Student s2 = new Student(\"Raina\", 101);\n        System.out.println(\"Default Constructor:\");\n        s1.display();\n        System.out.println(\"\\nParameterized Constructor:\");\n        s2.display();\n    }\n}",
    "output": "Default Constructor:\nName: Unknown\nRoll Number: 0\nParameterized Constructor:\nName: Raina\nRoll Number: 101"
   },
   {
    "id": "w6-5.2",
    "title": "Program 5.2: Constructor Overloading",
    "topics": [
     "Constructor Overloading",
     "BankAccountDemo"
    ],
    "code": "class BankAccount {\n    int accountNo;\n    String name;\n    double balance;\n    BankAccount() {\n        accountNo = 0;\n        name = \"Unknown\";\n        balance = 0;\n    }\n    BankAccount(int accountNo, String name) {\n        this.accountNo = accountNo;\n        this.name = name;\n        balance = 0;\n    }\n    BankAccount(int accountNo, String name, double balance) {\n        this.accountNo = accountNo;\n        this.name = name;\n        this.balance = balance;\n    }\n    void display() {\n        System.out.println(\"Account Number: \" + accountNo);\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Balance: \" + balance);\n        System.out.println();\n    }\n}\npublic class BankAccountDemo {\n    public static void main(String[] args) {\n        BankAccount b1 = new BankAccount();\n        BankAccount b2 = new BankAccount(101, \"Raina\");\n        BankAccount b3 = new BankAccount(102, \"Rinku\", 25000);\n        b1.display();\n        b2.display();\n        b3.display();\n    }\n}",
    "output": "Account Number: 0\nName: Unknown\nBalance: 0.0\nAccount Number: 101\nName: Raina\nBalance: 0.0\nAccount Number: 102\nName: Rinku\nBalance: 25000.0"
   },
   {
    "id": "w6-6.1",
    "title": "Program 6.1: Using this Keyword",
    "topics": [
     "Using this Keyword",
     "ThisDemo"
    ],
    "code": "class Student {\n    String name;\n    int age;\n    Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    void display() {\n        System.out.println(\"Name: \" + this.name);\n        System.out.println(\"Age: \" + this.age);\n    }\n}\npublic class ThisDemo {\n    public static void main(String[] args) {\n        Student s = new Student(\"Raina\", 19);\n        s.display();\n    }\n}",
    "output": "Name: Raina\nAge: 19"
   },
   {
    "id": "w6-6.2",
    "title": "Program 6.2: Constructor Chaining",
    "topics": [
     "Constructor Chaining",
     "ConstructorChaining"
    ],
    "code": "class Student {\n    String name;\n    int age;\n    String branch;\n    Student() {\n        this(\"Unknown\");\n    }\n    Student(String name) {\n        this(name, 0);\n    }\n    Student(String name, int age) {\n        this(name, age, \"CSE\");\n    }\n    Student(String name, int age, String branch) {\n        this.name = name;\n        this.age = age;\n        this.branch = branch;\n    }\n    void display() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Age: \" + age);\n        System.out.println(\"Branch: \" + branch);\n    }\n}\npublic class ConstructorChaining {\n    public static void main(String[] args) {\n        Student s = new Student(\"Raina\", 19, \"CSE-AIML\");\n        s.display();\n    }\n}",
    "output": "Name: Raina\nAge: 19\nBranch: CSE-AIML"
   },
   {
    "id": "w6-7.1",
    "title": "Program 7.1: Demonstrating Garbage Collection",
    "topics": [
     "Demonstrating Garbage Collection",
     "GarbageCollectionDemo"
    ],
    "code": "class Demo {\n    int id;\n    Demo(int id) {\n        this.id = id;\n    }\n    protected void finalize() {\n        System.out.println(\"Object \" + id + \" is garbage collected.\");\n    }\n}\npublic class GarbageCollectionDemo {\n    public static void main(String[] args) {\n        Demo d1 = new Demo(1);\n        Demo d2 = new Demo(2);\n        Demo d3 = new Demo(3);\n        d1 = null;\n        d2 = null;\n        d3 = null;\n        System.gc();\n        System.out.println(\"Garbage collection requested.\");\n    }\n}",
    "output": "Garbage collection requested."
   },
   {
    "id": "w6-7.2",
    "title": "Program 7.2: Object Eligibility for Garbage Collection",
    "topics": [
     "Object Eligibility for Garbage Collection",
     "ObjectEligibility"
    ],
    "code": "class Demo {\n    int id;\n    Demo(int id) {\n        this.id = id;\n    }\n}\npublic class ObjectEligibility {\n    public static void main(String[] args) {\n        Demo d1 = new Demo(1);\n        d1 = null;\n        Demo d2 = new Demo(2);\n        d2 = new Demo(3);\n        new Demo(4);\n        System.gc();\n        System.out.println(\"Objects are eligible for garbage collection.\");\n    }\n}",
    "output": "Objects are eligible for garbage collection."
   },
   {
    "id": "w6-8.1",
    "title": "Program 8.1: Overloading Arithmetic Methods",
    "topics": [
     "Overloading Arithmetic Methods",
     "ArithmeticOverloading"
    ],
    "code": "class Calculator {\n    int add(int a, int b) {\n        return a + b;\n    }\n    int add(int a, int b, int c) {\n        return a + b + c;\n    }\n    double add(double a, double b) {\n        return a + b;\n    }\n}\npublic class ArithmeticOverloading {\n    public static void main(String[] args) {\n        Calculator c = new Calculator();\n        System.out.println(\"Two integers: \" + c.add(10, 20));\n        System.out.println(\"Three integers: \" + c.add(10, 20, 30));\n        System.out.println(\"Two doubles: \" + c.add(10.5, 20.5));\n    }\n}",
    "output": "Two integers: 30\nThree integers: 60\nTwo doubles: 31.0"
   },
   {
    "id": "w6-8.2",
    "title": "Program 8.2: Overloading Area Methods",
    "topics": [
     "Overloading Area Methods",
     "AreaOverloading"
    ],
    "code": "class Area {\n    double area(double radius) {\n        return Math.PI * radius * radius;\n    }\n    int area(int length, int width) {\n        return length * width;\n    }\n    int area(int side) {\n        return side * side;\n    }\n}\npublic class AreaOverloading {\n    public static void main(String[] args) {\n        Area a = new Area();\n        System.out.println(\"Circle Area: \" + a.area(5.0));\n        System.out.println(\"Rectangle Area: \" + a.area(10, 5));\n        System.out.println(\"Square Area: \" + a.area(4));\n    }\n}",
    "output": "Circle Area: 78.53981633974483\nRectangle Area: 50\nSquare Area: 16"
   },
   {
    "id": "w6-9.1",
    "title": "Program 9.1: Passing Student Object",
    "topics": [
     "Passing Student Object",
     "StudentParameter"
    ],
    "code": "class Student {\n    String name;\n    int rollNo;\n    Student(String name, int rollNo) {\n        this.name = name;\n        this.rollNo = rollNo;\n    }\n}\npublic class StudentParameter {\n    static void display(Student s) {\n        System.out.println(\"Name: \" + s.name);\n        System.out.println(\"Roll Number: \" + s.rollNo);\n    }\n    public static void main(String[] args) {\n        Student s = new Student(\"Raina\", 101);\n        display(s);\n    }\n}",
    "output": "Name: Raina\nRoll Number: 101"
   },
   {
    "id": "w6-9.2",
    "title": "Program 9.2: Comparing Employee Salaries",
    "topics": [
     "Comparing Employee Salaries",
     "EmployeeSalary"
    ],
    "code": "class Employee {\n    String name;\n    double salary;\n    Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n}\npublic class EmployeeSalary {\n    static void compare(Employee e1, Employee e2) {\n        if (e1.salary > e2.salary) {\n            System.out.println(e1.name + \" has the higher salary.\");\n        } else if (e2.salary > e1.salary) {\n            System.out.println(e2.name + \" has the higher salary.\");\n        } else {\n            System.out.println(\"Both employees have the same salary.\");\n        }\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee(\"Rahul\", 50000);\n        Employee e2 = new Employee(\"Ananya\", 60000);\n        compare(e1, e2);\n    }\n}",
    "output": "Ananya has the higher salary."
   },
   {
    "id": "w6-10.1",
    "title": "Program 10.1: Returning a Student Object",
    "topics": [
     "Returning a Student Object",
     "ReturnStudent"
    ],
    "code": "class Student {\n    String name;\n    int rollNo;\n    Student(String name, int rollNo) {\n        this.name = name;\n        this.rollNo = rollNo;\n    }\n    void display() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Roll Number: \" + rollNo);\n    }\n}\npublic class ReturnStudent {\n    static Student createStudent() {\n        Student s = new Student(\"Raina\", 101);\n        return s;\n    }\n    public static void main(String[] args) {\n        Student s = createStudent();\n        s.display();\n    }\n}",
    "output": "Name: Raina\nRoll Number: 101"
   },
   {
    "id": "w6-10.2",
    "title": "Program 10.2: Returning a Bank Account Object",
    "topics": [
     "Returning a Bank Account Object",
     "ReturnBankAccount"
    ],
    "code": "class BankAccount {\n    String name;\n    double balance;\n    BankAccount(String name, double balance) {\n        this.name = name;\n        this.balance = balance;\n    }\n    void display() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Balance: \" + balance);\n    }\n}\npublic class ReturnBankAccount {\n    static BankAccount updateBalance(BankAccount account) {\n        account.balance += 5000;\n        return account;\n    }\n    public static void main(String[] args) {\n        BankAccount b = new BankAccount(\"Ravi\", 20000);\n        b = updateBalance(b);\n        b.display();\n    }\n}",
    "output": "Name: Ravi\nBalance: 25000.0\n## **Experiment 11: Understanding **static"
   },
   {
    "id": "w6-11.1",
    "title": "Program 11.1: Static Variable",
    "topics": [
     "Static Variable",
     "StaticVariable"
    ],
    "code": "class Student {\n    String name;\n    static int count = 0;\n    Student(String name) {\n        this.name = name;\n        count++;\n    }\n    void display() {\n        System.out.println(\"Name: \" + name);\n    }\n}\npublic class StaticVariable {\n    public static void main(String[] args) {\n        Student s1 = new Student(\"Raina\");\n        Student s2 = new Student(\"Rinku\");\n        Student s3 = new Student(\"Amar\");\n        s1.display();\n        s2.display();\n        s3.display();\n        System.out.println(\"Total Students: \" + Student.count);\n    }\n}",
    "output": "Name: Raina\nName: Rinku\nName: Amar\nTotal Students: 3"
   },
   {
    "id": "w6-11.2",
    "title": "Program 11.2: Static Methods",
    "topics": [
     "Static Methods",
     "StaticMethods"
    ],
    "code": "class Utility {\n    static int square(int n) {\n        return n * n;\n    }\n    static int cube(int n) {\n        return n * n * n;\n    }\n    static long factorial(int n) {\n        long fact = 1;\n        for (int i = 1; i <= n; i++) {\n            fact *= i;\n        }\n        return fact;\n    }\n}\npublic class StaticMethods {\n    public static void main(String[] args) {\n        int n = 5;\n        System.out.println(\"Square: \" + Utility.square(n));\n        System.out.println(\"Cube: \" + Utility.cube(n));\n        System.out.println(\"Factorial: \" + Utility.factorial(n));\n    }\n}",
    "output": "Square: 25\nCube: 125\nFactorial: 120\n## **Experiment 12: Introducing **final"
   },
   {
    "id": "w6-12.1",
    "title": "Program 12.1: Final Keyword",
    "topics": [
     "Final Keyword",
     "FinalDemo"
    ],
    "code": "class Parent {\n    final int VALUE = 100;\n    final void display() {\n        System.out.println(\"This is a final method.\");\n        System.out.println(\"Final variable: \" + VALUE);\n    }\n}\nfinal class FinalClass {\n    void show() {\n        System.out.println(\"This is a final class.\");\n    }\n}\npublic class FinalDemo {\n    public static void main(String[] args) {\n        Parent p = new Parent();\n        p.display();\n        FinalClass f = new FinalClass();\n        f.show();\n    }\n}",
    "output": "This is a final method.\nFinal variable: 100\nThis is a final class."
   },
   {
    "id": "w6-12.2",
    "title": "Program 12.2: Blank Final Variable",
    "topics": [
     "Blank Final Variable",
     "BlankFinal"
    ],
    "code": "class Employee {\n    final int employeeId;\n    String name;\n    Employee(int employeeId, String name) {\n        this.employeeId = employeeId;\n        this.name = name;\n    }\n    void display() {\n        System.out.println(\"Employee ID: \" + employeeId);\n        System.out.println(\"Name: \" + name);\n    }\n}\npublic class BlankFinal {\n    public static void main(String[] args) {\n        Employee e1 = new Employee(101, \"Raina\");\n        Employee e2 = new Employee(102, \"Rinku\");\n        e1.display();\n        System.out.println();\n        e2.display();\n    }\n}",
    "output": "Employee ID: 101\nName: Raina\nEmployee ID: 102\nName: Rinku"
   },
   {
    "id": "w6-13.1",
    "title": "Program 13.1: College and Department",
    "topics": [
     "College and Department",
     "CollegeDemo"
    ],
    "code": "class College {\n    static class Department {\n        String name;\n        Department(String name) {\n            this.name = name;\n        }\n        void display() {\n            System.out.println(\"Department: \" + name);\n        }\n    }\n}\npublic class CollegeDemo {\n    public static void main(String[] args) {\n        College.Department d =\n                new College.Department(\"CSE-AIML\");\n        d.display();\n    }\n}",
    "output": "Department: CSE-AIML"
   },
   {
    "id": "w6-13.2",
    "title": "Program 13.2: Employee Address",
    "topics": [
     "Employee Address",
     "EmployeeAddress"
    ],
    "code": "class Employee {\n    int id;\n    String name;\n    Employee(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n    static class Address {\n        String city;\n        String state;\n        Address(String city, String state) {\n            this.city = city;\n            this.state = state;\n        }\n        void display() {\n            System.out.println(\"City: \" + city);\n            System.out.println(\"State: \" + state);\n        }\n    }\n}\npublic class EmployeeAddress {\n    public static void main(String[] args) {\n        Employee e = new Employee(101, \"Ravi\");\n        Employee.Address address =\n                new Employee.Address(\"Vijayawada\", \"Andhra Pradesh\");\n        System.out.println(\"Employee ID: \" + e.id);\n        System.out.println(\"Name: \" + e.name);\n        address.display();\n    }\n}",
    "output": "Employee ID: 101\nName: Ravi\nCity: Vijayawada\nState: Andhra Pradesh"
   },
   {
    "id": "w6-14.1",
    "title": "Program 14.1: Student Address",
    "topics": [
     "Student Address",
     "StudentAddress"
    ],
    "code": "class Student {\n    String name;\n    int rollNo;\n    Student(String name, int rollNo) {\n        this.name = name;\n        this.rollNo = rollNo;\n    }\n    class Address {\n        String city;\n        String state;\n        Address(String city, String state) {\n            this.city = city;\n            this.state = state;\n        }\n        void display() {\n            System.out.println(\"Student Name: \" + name);\n            System.out.println(\"Roll Number: \" + rollNo);\n            System.out.println(\"City: \" + city);\n            System.out.println(\"State: \" + state);\n        }\n    }\n}\npublic class StudentAddress {\n    public static void main(String[] args) {\n        Student s = new Student(\"Ravi\", 101);\n        Student.Address a =\n                s.new Address(\"Vijayawada\", \"Andhra Pradesh\");\n        a.display();\n    }\n}",
    "output": "Student Name: Ravi\nRoll Number: 101\nCity: Vijayawada\nState: Andhra Pradesh"
   },
   {
    "id": "w6-14.2",
    "title": "Program 14.2: Library Management",
    "topics": [
     "Library Management",
     "LibraryManagement"
    ],
    "code": "class Library {\n    String libraryName;\n    Library(String libraryName) {\n        this.libraryName = libraryName;\n    }\n    class Book {\n        String title;\n        String author;\n        Book(String title, String author) {\n            this.title = title;\n            this.author = author;\n        }\n        void display() {\n            System.out.println(\"Library: \" + libraryName);\n            System.out.println(\"Book Title: \" + title);\n            System.out.println(\"Author: \" + author);\n        }\n    }\n}\npublic class LibraryManagement {\n    public static void main(String[] args) {\n        Library library = new Library(\"Central Library\");\n        Library.Book book =\n                library.new Book(\"Java Programming\", \"James Gosling\");\n        book.display();\n    }\n}",
    "output": "Library: Central Library\nBook Title: Java Programming\nAuthor: James Gosling"
   }
  ]
 },
 {
  "week": "Week 7",
  "num": 7,
  "title": "Strings, StringBuffer & Basic Inheritance",
  "summary": "String constructors, == vs .equals(), StringBuffer, StringTokenizer, basic inheritance and super.",
  "experiments": [
   {
    "id": "w7-1",
    "title": "Program 1: StringCons",
    "topics": [
     "String constructors",
     "== vs .equals()",
     "String literal",
     "StringCons"
    ],
    "code": "public class StringCons{\n    public static void main(String[] args) {\n        String strLiteral1 = \"Java\";\n        String strLiteral2 = \"Java\";\n        String strEmpty = new String();\n        char[] charArray = {'P', 'r', 'o', 'g', 'r', 'a', 'm'};\n        String strFromChar = new String(charArray);\n        byte[] byteArray = {67, 111, 100, 101};\n        String strFromByte = new String(byteArray);\n        String strNewObject1 = new String(\"Java\");\n        String strNewObject2 = new String(\"Java\");\n        System.out.println(\"1. String Literal: \" + strLiteral1);\n        System.out.println(\"2. Empty String via new String(): '\" + strEmpty + \"' (Length: \" + strEmpty.length() + \")\");\n        System.out.println(\"3. From Character Array: \" + strFromChar);\n        System.out.println(\"4. From Byte Array: \" + strFromByte);\n        System.out.print(\"Comparing two literals (strLiteral1 == strLiteral2): \");\n        System.out.println(strLiteral1 == strLiteral2);\n        System.out.print(\"Comparing literal with 'new' object (strLiteral1 == strNewObject1): \");\n        System.out.println(strLiteral1 == strNewObject1);\n        System.out.print(\"Comparing two 'new' objects (strNewObject1 == strNewObject2): \");\n        System.out.println(strNewObject1 == strNewObject2);\n        System.out.print(\"Comparing values using .equals() (strLiteral1.equals(strNewObject1)): \");\n        System.out.println(strLiteral1.equals(strNewObject1));\n    }\n}",
    "output": "1. String Literal: Java\n2. Empty String via new String(): '' (Length: 0)\n3. From Character Array: Program\n4. From Byte Array: Code\nComparing two literals (strLiteral1 == strLiteral2): true\nComparing literal with 'new' object (strLiteral1 == strNewObject1): false\nComparing two 'new' objects (strNewObject1 == strNewObject2): false\nComparing values using .equals() (strLiteral1.equals(strNewObject1)): true"
   },
   {
    "id": "w7-2",
    "title": "Program 2: StrBuffer",
    "topics": [
     "StringBuffer",
     "append",
     "insert",
     "replace",
     "delete",
     "reverse",
     "StrBuffer"
    ],
    "code": "public class StrBuffer{\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Hello\");\n        System.out.println(\"Initial String: \" + sb);\n        displayStats(sb);\n        sb.append(\" World\");\n        System.out.println(\"\\nAfter Append: \" + sb);\n        displayStats(sb);\n        sb.insert(6, \"Beautiful \");\n        System.out.println(\"\\nAfter Insert: \" + sb);\n        displayStats(sb);\n        sb.replace(6, 15, \"Awesome\");\n        System.out.println(\"\\nAfter Replace: \" + sb);\n        displayStats(sb);\n        sb.delete(5, 13);\n        System.out.println(\"\\nAfter Delete: \" + sb);\n        displayStats(sb);\n        sb.reverse();\n        System.out.println(\"\\nAfter Reverse: \" + sb);\n        displayStats(sb);\n    }\n    public static void displayStats(StringBuffer buffer) {\n        System.out.println(\"Length: \" + buffer.length() + \"  Capacity: \" + buffer.capacity());\n    }\n}",
    "output": "Initial String: Hello\n Length: 5  Capacity: 21\nAfter Append: Hello World\n Length: 11  Capacity: 21\nAfter Insert: Hello Beautiful World\n Length: 21 Capacity: 21\nAfter Replace: Hello Awesome World\n Length: 19  Capacity: 21\nAfter Delete: Hello World\n Length: 11 Capacity: 21\nAfter Reverse: dlroW olleH\nLength: 11  Capacity: 21"
   },
   {
    "id": "w7-3",
    "title": "Program 3: StringTokenizerDemo",
    "topics": [
     "StringTokenizer",
     "Delimiter",
     "StringTokenizerDemo"
    ],
    "code": "import java.util.Scanner;\nimport java.util.StringTokenizer;\npublic class StringTokenizerDemo {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter a sentence: \");\n        String sentence = sc.nextLine();\n        StringTokenizer st = new StringTokenizer(sentence);\n        int count1 = st.countTokens();\n        System.out.println(\"\\nTokens:\");\n        while (st.hasMoreTokens()) {\n            System.out.println(st.nextToken());\n        }\n        System.out.println(\"Total number of tokens: \" + count1);\n        System.out.print(\"\\nEnter a delimiter: \");\n        String delimiter = sc.nextLine();\n        StringTokenizer st2 = new StringTokenizer(sentence, delimiter);\n        int count2 = st2.countTokens();\n        System.out.println(\"\\nTokens using delimiter '\" + delimiter + \"':\");\n        while (st2.hasMoreTokens()) {\n            System.out.println(st2.nextToken());\n        }\n        System.out.println(\"Total number of tokens: \" + count2);\n        sc.close();\n    }\n}",
    "output": "Enter a sentence: Java is easy to learn\nTokens:\nJava\nis\neasy\nto\nlearn\nTotal number of tokens: 5\nEnter a delimiter: a\nTokens using delimiter 'a':\nJ\nv\n is e\nsy to le\nrn\nTotal number of tokens: 5"
   },
   {
    "id": "w7-4",
    "title": "Program 4: BasicInheritance",
    "topics": [
     "Basic inheritance",
     "extends",
     "super",
     "BasicInheritance"
    ],
    "code": "class Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    void displayPersonDetails() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Age: \" + age);\n    }\n}\nclass Student extends Person {\n    int rollNo;\n    String branch;\n    Student(String name, int age, int rollNo, String branch) {\n        super(name, age);\n        this.rollNo = rollNo;\n        this.branch = branch;\n    }\n    void displayStudentDetails() {\n        displayPersonDetails();\n        System.out.println(\"Roll Number: \" + rollNo);\n        System.out.println(\"Branch: \" + branch);\n    }\n}\npublic class BasicInheritance {\n    public static void main(String[] args) {\n        Student s = new Student(\"Raji\", 19, 101, \"AIML\");\n        s.displayStudentDetails();\n    }\n}",
    "output": "Name: Raji\nAge: 19\nRoll Number: 101\nBranch: AIML"
   },
   {
    "id": "w7-5",
    "title": "Program 5: SuperKeywordDemo",
    "topics": [
     "super keyword",
     "Inheritance",
     "SuperKeywordDemo"
    ],
    "code": "class Employee {\n    String name;\n    double salary;\n    Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n    void displayDetails() {\n        System.out.println(\"Employee Name: \" + name);\n        System.out.println(\"Salary: \" + salary);\n    }\n}\nclass Manager extends Employee {\n    String department;\n    double bonus;\n    Manager(String name, double salary, String department, double bonus) {\n        super(name, salary);\n        this.department = department;\n        this.bonus = bonus;\n    }\n    void displayManagerDetails() {\n        System.out.println(\"Manager Details:\");\n        super.displayDetails();\n        System.out.println(\"Employee Name using super: \" + super.name);\n        System.out.println(\"Department: \" + department);\n        System.out.println(\"Bonus: \" + bonus);\n    }\n}\npublic class SuperKeywordDemo {\n    public static void main(String[] args) {\n        Manager m = new Manager(\"Ravi”,50000, \"AI & ML\",10000);\n        m.displayManagerDetails();\n    }\n}",
    "output": "Manager Details:\nEmployee Name: Ravi\nSalary: 50000.0\nEmployee Name using super: Ravi\nDepartment: AI & ML\nBonus: 10000.0"
   }
  ]
 },
 {
  "week": "Week 8",
  "num": 8,
  "title": "Inheritance, Overriding & Dynamic Dispatch",
  "summary": "Single and multilevel inheritance, super, method overriding, dynamic method dispatch and a banking application.",
  "experiments": [
   {
    "id": "w8-1",
    "title": "1. Single Inheritance",
    "topics": [
     "Single Inheritance",
     "SingleInheritance"
    ],
    "code": "class Person {\n    String name;\n    int age;\n    void getPersonDetails(String n, int a) {\n        name = n;\n        age = a;\n    }\n    void displayPerson() {\n        System.out.println(\"Name   : \" + name);\n        System.out.println(\"Age    : \" + age);\n    }\n}\nclass Student extends Person {\n    int rollNo;\n    String branch;\n    void getStudentDetails(int r, String b) {\n        rollNo = r;\n        branch = b;\n    }\n    void displayStudent() {\n        displayPerson();\n        System.out.println(\"Roll No: \" + rollNo);\n        System.out.println(\"Branch : \" + branch);\n    }\npublic class SingleInheritance {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.getPersonDetails(\"ramesh\", 19);\n        s.getStudentDetails(011, \"AI&ML\");\n        System.out.println(\"Student Details:\");\n        s.displayStudent();\n    }\n}",
    "outputImages": [
     "assets/week8-output-01.jpg"
    ],
    "note": "Output is shown as a screenshot from the document."
   },
   {
    "id": "w8-2",
    "title": "2. Using super Keyword",
    "topics": [
     "Using super Keyword",
     "SuperKeywordDemo"
    ],
    "code": "class Vehicle {\n    int speed = 80;\n    void display() {\n        System.out.println(\"Vehicle Speed: \" + speed);\n    }\n}\nclass Car extends Vehicle {\n    String model = \"Toyota\";\n    void display() {\n        System.out.println(\"Car Model: \" + model);\n        System.out.println(\"Vehicle Speed: \" + super.speed);\n        super.display();\n    }\n}\npublic class SuperKeywordDemo {\n    public static void main(String[] args) {\n        Car c = new Car();\n        c.display();\n    }\n}",
    "outputImages": [
     "assets/week8-output-02.jpg"
    ],
    "note": "Output is shown as a screenshot from the document."
   },
   {
    "id": "w8-3",
    "title": "3. Multilevel Inheritance",
    "topics": [
     "Multilevel Inheritance",
     "MultilevelInheritance"
    ],
    "code": "class Person {\n    String name;\n    int age;\n    void getPersonDetails(String n, int a) {\n        name = n;\n        age = a;\n    }\n}\nclass Employee extends Person {\n    int empId;\n    String designation;\n    void getEmployeeDetails(int id, String d) {\n        empId = id;\n        designation = d;\n    }\n}\nclass Manager extends Employee {\n    String department;\n    void getManagerDetails(String dept) {\n        department = dept;\n    }\n    void displayDetails() {\n        System.out.println(\"Name        : \" + name);\n        System.out.println(\"Age         : \" + age);\n        System.out.println(\"Employee ID : \" + empId);\n        System.out.println(\"Designation : \" + designation);\n        System.out.println(\"Department  : \" + department);\n    }\n}\npublic class MultilevelInheritance{\n    public static void main(String[] args) {\n        Manager m = new Manager();\n        m.getPersonDetails(\"meghana\", 22);\n        m.getEmployeeDetails(945, \"Manager\");\n        m.getManagerDetails(\"CSE\");\n        m.displayDetails();\n    }\n}",
    "outputImages": [
     "assets/week8-output-03.jpg"
    ],
    "note": "Output is shown as a screenshot from the document."
   },
   {
    "id": "w8-4",
    "title": "4. Method Overriding",
    "topics": [
     "Method Overriding",
     "MethodOverridingDemo"
    ],
    "code": "class Animal {\n    void sound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n}\nclass Dog extends Animal {\n    void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}\nclass Cat extends Animal {\n    void sound() {\n        System.out.println(\"Cat meows\");\n    }\n}\npublic class MethodOverridingDemo {\n    public static void main(String[] args) {\n        Animal a1 = new Dog();\n        Animal a2 = new Cat();\n        a1.sound();\n        a2.sound();\n    }\n}",
    "outputImages": [
     "assets/week8-output-04.jpg"
    ],
    "note": "Output is shown as a screenshot from the document."
   },
   {
    "id": "w8-5",
    "title": "5. Dynamic Method Dispatch",
    "topics": [
     "Dynamic Method Dispatch",
     "DynamicMethodDispatchDemo"
    ],
    "code": "class Shape {\n    void draw() {\n        System.out.println(\"Drawing Shape\");\n    }\n}\nclass Circle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing Circle\");\n    }\n}\nclass Rectangle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing Rectangle\");\n    }\n}\nclass Triangle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing Triangle\");\n    }\n}\npublic class DynamicMethodDispatchDemo {\n    public static void main(String[] args) {\n        Shape s;\n        s = new Circle();\n        s.draw();\n        s = new Rectangle();\n        s.draw();\n        s = new Triangle();\n        s.draw();\n    }\n}",
    "outputImages": [
     "assets/week8-output-05.jpg"
    ],
    "note": "Output is shown as a screenshot from the document."
   },
   {
    "id": "w8-6",
    "title": "6. super with Method Overriding",
    "topics": [
     "super with Method Overriding",
     "MultilevelSalaryDemo"
    ],
    "code": "class Employee {\n    double basicSalary = 30000;\n}\nclass Developer extends Employee {\n    double programmingAllowance = 5000;\n}\nclass SeniorDeveloper extends Developer {\n    double projectAllowance = 10000;\n    void displaySalary() {\n        double totalSalary = basicSalary + programmingAllowance + projectAllowance;\n        System.out.println(\"Basic Salary          : \" + basicSalary);\n        System.out.println(\"Programming Allowance : \" + programmingAllowance);\n        System.out.println(\"Project Allowance     : \" + projectAllowance);\n        System.out.println(\"Total Salary          : \" + totalSalary);\n    }\n}\npublic class MultilevelSalaryDemo {\n    public static void main(String[] args) {\n        SeniorDeveloper s = new SeniorDeveloper();\n        s.displaySalary();\n    }\n}",
    "outputImages": [
     "assets/week8-output-06.jpg"
    ],
    "note": "Output is shown as a screenshot from the document."
   },
   {
    "id": "w8-8",
    "title": "8. Dynamic Method Dispatch for Bank Accounts",
    "topics": [
     "Dynamic Method Dispatch for Bank Accounts",
     "DynamicMethodDispatchDemo"
    ],
    "code": "class BankAccount {\n    void calculateInterest() {\n        System.out.println(\"Calculating bank account interest\");\n    }\n}\nclass SavingsAccount extends BankAccount {\n    void calculateInterest() {\n        System.out.println(\"Savings Account Interest: 5%\");\n    }\n}\nclass CurrentAccount extends BankAccount {\n    void calculateInterest() {\n        System.out.println(\"Current Account Interest: 3%\");\n    }\n}\npublic class DynamicMethodDispatchDemo{\n    public static void main(String[] args) {\n        BankAccount account;\n        account = new SavingsAccount();\n        account.calculateInterest();\n        account = new CurrentAccount();\n        account.calculateInterest();\n    }\n}",
    "outputImages": [
     "assets/week8-output-07.jpg"
    ],
    "note": "Output is shown as a screenshot from the document."
   },
   {
    "id": "w8-9",
    "title": "9. Constructor Execution in Multilevel Inheritance",
    "topics": [
     "Constructor Execution in Multilevel Inheritance",
     "ConstructorOrder"
    ],
    "code": "class Person {\n    Person() {\n        System.out.println(\"Person constructor executed\");\n    }\n}\nclass Student extends Person {\n    Student() {\n        System.out.println(\"Student constructor executed\");\n    }\n}\nclass GraduateStudent extends Student {\n    GraduateStudent() {\n        System.out.println(\"GraduateStudent constructor executed\");\n    }\n}\npublic class ConstructorOrder{\n    public static void main(String[] args) {\n        GraduateStudent g = new GraduateStudent();\n    }\n}",
    "outputImages": [
     "assets/week8-output-08.jpg"
    ],
    "note": "Output is shown as a screenshot from the document."
   },
   {
    "id": "w8-10",
    "title": "10. Banking Application Using Inheritance",
    "topics": [
     "Banking Application Using Inheritance",
     "BankingApplication"
    ],
    "code": "class BankAccount {\n    int accountNumber;\n    double balance;\n    BankAccount(int accountNumber, double balance) {\n        this.accountNumber = accountNumber;\n        this.balance = balance;\n    }\n    void deposit(double amount) {\n        balance += amount;\n        System.out.println(\"Deposited: \" + amount);\n    }\n    void withdraw(double amount) {\n        if (amount <= balance) {\n            balance -= amount;\n            System.out.println(\"Withdrawn: \" + amount);\n        } else {\n            System.out.println(\"Insufficient balance\");\n        }\n    }\n    void calculateInterest() {\n        System.out.println(\"No interest for general account\");\n    }\n    void displayBalance() {\n        System.out.println(\"Account Number: \" + accountNumber);\n        System.out.println(\"Balance: \" + balance);\n    }\n}\nclass SavingsAccount extends BankAccount {\n    SavingsAccount(int accountNumber, double balance) {\n        super(accountNumber, balance);\n    }\n    void calculateInterest() {\n        double interest = balance * 0.05;\n        balance += interest;\n        System.out.println(\"Savings Interest: \" + interest);\n    }\n}\nclass CurrentAccount extends BankAccount {\n    CurrentAccount(int accountNumber, double balance) {\n        super(accountNumber, balance);\n    }\n    void calculateInterest() {\n        double interest = balance * 0.02;\n        balance += interest;\n        System.out.println(\"Current Account Interest: \" + interest);\n    }\n}\npublic class BankingApplication {\n    public static void main(String[] args) {\n        BankAccount savings = new SavingsAccount(101, 10000);\n        BankAccount current = new CurrentAccount(102, 15000);\n        System.out.println(\"Savings Account\");\n        savings.deposit(2000);\n        savings.withdraw(1000);\n        savings.calculateInterest();\n        savings.displayBalance();\n        System.out.println();\n        System.out.println(\"Current Account\");\n        current.deposit(3000);\n        current.withdraw(2000);\n        current.calculateInterest();\n        current.displayBalance();\n    }\n}",
    "outputImages": [
     "assets/week8-output-09.jpg"
    ],
    "note": "Output is shown as a screenshot from the document."
   }
  ]
 },
 {
  "week": "Week 10",
  "num": 10,
  "title": "Exception Handling & Byte Streams",
  "summary": "try/catch, throw, throws, finally, user-defined exceptions, and byte stream file I/O.",
  "experiments": [
   {
    "id": "w10-exc-1",
    "group": "Exception Handling Experiments",
    "title": "Exception Handling 1: ZeroDivError",
    "topics": [
     "ArithmeticException",
     "try-catch",
     "ZeroDivError"
    ],
    "code": "public class ZeroDivError{\n    public static void main(String[] args){\n        try{\n            int c = 10 / 0;\n            System.out.println(\"Result:\"+c);\n        }\n        catch (ArthmeticException e){\n            System.out.println(\"Error: Division by zero\");\n        }\n        System.out.println(\"Code executed\");\n    }\n}",
    "output": "ERROR!\nError: Division by zero\nCode executed"
   },
   {
    "id": "w10-exc-2",
    "group": "Exception Handling Experiments",
    "title": "Exception Handling 2: Exceptiontypes",
    "topics": [
     "Multiple exceptions",
     "ArithmeticException",
     "ArrayIndexOutOfBoundsException",
     "NullPointerException",
     "Exceptiontypes"
    ],
    "code": "public class Exceptiontypes {\n    public static void main(String[] args) {\n        try {\n            int a = 5 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println(\"Caught ArithmeticException: \" + e.getMessage());\n        }\n        try {\n            int[] arr = new int[3];\n            int val = arr[5];\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Caught ArrayIndexOutOfBoundsException: \" + e.getMessage());\n        }\n        try {\n            String str = null;\n            int length = str.length();\n        } catch (NullPointerException e) {\n            System.out.println(\"Caught NullPointerException: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Caught ArithmeticException: / by zero\nCaught ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3\nCaught NullPointerException: Cannot invoke \"String.length()\" because \"<local1>\" is null"
   },
   {
    "id": "w10-exc-3",
    "group": "Exception Handling Experiments",
    "title": "Exception Handling 3: UncaughtExceptionDemo",
    "topics": [
     "Uncaught exceptions",
     "UncaughtExceptionDemo"
    ],
    "code": "public class UncaughtExceptionDemo {\n    public static void main(String[] args) {\n        int num = 50 / 0; // Uncaught exception, terminates program and prints stack trace\n        System.out.println(\"This line will not execute.\");\n    }\n}",
    "output": "ERROR!\nException in thread \"main\" java.lang.ArithmeticException: / by zero\n\tat Main.main(Main.java:6)"
   },
   {
    "id": "w10-exc-4",
    "group": "Exception Handling Experiments",
    "title": "Exception Handling 4: MultipleCatch",
    "topics": [
     "Multiple catch",
     "MultipleCatch"
    ],
    "code": "public class MultipleCatch{\n    public static void main(String[] args) {\n        try {\n            String s = null;\n            System.out.println(s.length()); // Triggers NullPointerException\n            int x = 10 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println(\"Arithmetic exception handled.\");\n        } catch (NullPointerException e) {\n            System.out.println(\"Null pointer exception handled.\");\n        } catch (Exception e) {\n            System.out.println(\"General exception handled.\");\n        }\n    }\n}",
    "output": "Null pointer exception handled."
   },
   {
    "id": "w10-exc-5",
    "group": "Exception Handling Experiments",
    "title": "Exception Handling 5: Throw",
    "topics": [
     "throw",
     "Throw"
    ],
    "code": "public class Throw{\n    public static void checkAge(int age) {\n        if (age < 18) {\n            throw new IllegalArgumentException(\"Age must be 18 or older.\");\n        } else {\n            System.out.println(\"Access granted.\");\n        }\n    }\n    public static void main(String[] args) {\n        try {\n            checkAge(15);\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Caught explicit exception: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Caught explicit exception: Age must be 18 or older."
   },
   {
    "id": "w10-exc-6",
    "group": "Exception Handling Experiments",
    "title": "Exception Handling 6: Throws",
    "topics": [
     "throws",
     "Throws"
    ],
    "code": "import java.io.IOException;\npublic class Throws{\n    static void validateFile() throws IOException {\n        throw new IOException(\"Device error/File error.\");\n    }\n    public static void main(String[] args) {\n        try {\n            validateFile();\n        } catch (IOException e) {\n            System.out.println(\"Caught propagated exception: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Caught propagated exception: Device error/File error."
   },
   {
    "id": "w10-exc-7",
    "group": "Exception Handling Experiments",
    "title": "Exception Handling 7: Finally",
    "topics": [
     "finally",
     "Finally"
    ],
    "code": "public class Finally{\n    public static void main(String[] args) {\n        try {\n            int data = 25 / 5;\n            System.out.println(data);\n        } catch (ArithmeticException e) {\n            System.out.println(e);\n        } finally {\n            System.out.println(\"Finally block is always executed.\");\n        }\n    }\n}",
    "output": "5\nFinally block is always executed."
   },
   {
    "id": "w10-exc-8",
    "group": "Exception Handling Experiments",
    "title": "Exception Handling 8: UserDefinedException",
    "topics": [
     "User-defined exceptions",
     "UserDefinedException"
    ],
    "code": "class InvalidAgeException extends Exception {\n    public InvalidAgeException(String message) {\n        super(message);\n    }\n}\npublic class UserDefinedException {\n    public static void main(String[] args) {\n        int age = 12;\n        try {\n            if (age < 18) {\n                throw new InvalidAgeException(\"Not eligible to vote.\");\n            }\n        } catch (InvalidAgeException e) {\n            System.out.println(\"Custom Exception: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Custom Exception: Not eligible to vote."
   },
   {
    "id": "w10-exc-9",
    "group": "Exception Handling Experiments",
    "title": "Exception Handling 9: MarksValidation",
    "topics": [
     "Validation exception",
     "User-defined exceptions",
     "throws",
     "MarksValidation"
    ],
    "code": "class InvalidMarksException extends Exception {\n    public InvalidMarksException(String msg) {\n        super(msg);\n    }\n}\npublic class MarksValidation {\n    public static void validateMarks(int marks) throws InvalidMarksException {\n        if (marks < 0 || marks > 100) {\n            throw new InvalidMarksException(\"Marks must be between 0 and 100.\");\n        }\n        System.out.println(\"Marks are valid: \" + marks);\n    }\n    public static void main(String[] args) {\n        try {\n            validateMarks(105);\n        } catch (InvalidMarksException e) {\n            System.out.println(\"Validation Error: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Validation Error: Marks must be between 0 and 100."
   },
   {
    "id": "w10-exc-10",
    "group": "Exception Handling Experiments",
    "title": "Exception Handling 10: AllExceptions",
    "topics": [
     "User-defined exceptions",
     "finally",
     "Multiple catch",
     "AllExceptions"
    ],
    "code": "class OutOfRangeEx extends Exception {\n    OutOfRangeEx(String s) { super(s); }\n}\npublic class AllExceptions {\n    static void checkValue(int val) throws OutOfRangeEx {\n        if (val > 50) {\n            throw new OutOfRangeEx(\"Value exceeds limit 50.\");\n        }\n        System.out.println(\"Valid value.\");\n    }\n    public static void main(String[] args) {\n        try {\n            int num = 10;\n            int res = num / 2;\n            checkValue(60); // Triggers custom exception\n        } catch (ArithmeticException e) {\n            System.out.println(\"Arithmetic caught.\");\n        } catch (OutOfRangeEx e) {\n            System.out.println(\"Custom caught: \" + e.getMessage());\n        } finally {\n            System.out.println(\"Finally block executed cleanly.\");\n        }\n    }\n}",
    "output": "Custom caught: Value exceeds limit 50.\nFinally block executed cleanly."
   },
   {
    "id": "w10-io-1",
    "group": "I/O Streams: The Byte Streams Experiments",
    "title": "Byte Streams 1: ByteStream",
    "topics": [
     "Byte streams",
     "ByteArrayInputStream",
     "ByteArrayOutputStream",
     "ByteStream"
    ],
    "code": "import java.io.ByteArrayInputStream;\nimport java.io.ByteArrayOutputStream;\nimport java.io.IOException;\npublic class ByteStream {\n    public static void main(String[] args) throws IOException {\n        byte[] data = {65, 66, 67, 68}; // ASCII for A, B, C, D\n        ByteArrayInputStream input = new ByteArrayInputStream(data);\n        ByteArrayOutputStream output = new ByteArrayOutputStream();\n        int val;\n        while ((val = input.read()) != -1) {\n            output.write(val);\n        }\n        System.out.println(\"Output bytes as string: \" + output.toString());\n    }\n}",
    "output": "Output bytes as string: ABCD"
   },
   {
    "id": "w10-io-2",
    "group": "I/O Streams: The Byte Streams Experiments",
    "title": "Byte Streams 2: ReadFileByteByByte",
    "topics": [
     "Byte streams",
     "FileInputStream",
     "ReadFileByteByByte"
    ],
    "code": "import java.io.FileInputStream;\nimport java.io.IOException;\npublic class ReadFileByteByByte {\n    public static void main(String[] args) {\n        try (FileInputStream fis = new FileInputStream(\"test.txt\")) {\n            int i;\n            while ((i = fis.read()) != -1) {\n                System.out.print((char) i);\n            }\n        } catch (IOException e) {\n            System.out.println(\"Error reading file: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Error reading file: test.txt (No such file or directory)"
   },
   {
    "id": "w10-io-3",
    "group": "I/O Streams: The Byte Streams Experiments",
    "title": "Byte Streams 3: WriteFileByte",
    "topics": [
     "Byte streams",
     "FileOutputStream",
     "WriteFileByte"
    ],
    "code": "import java.io.FileOutputStream;\nimport java.io.IOException;\npublic class WriteFileByte {\n    public static void main(String[] args) {\n        String text = \"Learning Byte Streams in Java.\";\n        try (FileOutputStream fos = new FileOutputStream(\"output.txt\")) {\n            fos.write(text.getBytes());\n            System.out.println(\"Data successfully written to output.txt\");\n        } catch (IOException e) {\n            System.out.println(\"Error writing file: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Error writing file: output.txt (Permission denied)"
   },
   {
    "id": "w10-io-4",
    "group": "I/O Streams: The Byte Streams Experiments",
    "title": "Byte Streams 4: CopyFileBytes",
    "topics": [
     "Byte streams",
     "File copying",
     "FileInputStream",
     "FileOutputStream",
     "CopyFileBytes"
    ],
    "code": "import java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\npublic class CopyFileBytes {\n    public static void main(String[] args) {\n        try (FileInputStream fis = new FileInputStream(\"source.txt\");\n             FileOutputStream fos = new FileOutputStream(\"destination.txt\")) {\n            int temp;\n            while ((temp = fis.read()) != -1) {\n                fos.write(temp);\n            }\n            System.out.println(\"File copied successfully.\");\n        } catch (IOException e) {\n            System.out.println(\"I/O Error: \" + e.getMessage());\n        }\n    }\n}",
    "output": "ERROR!\nI/O Error: source.txt (No such file or directory)"
   },
   {
    "id": "w10-io-5",
    "group": "I/O Streams: The Byte Streams Experiments",
    "title": "Byte Streams 5: CopyImageBytes",
    "topics": [
     "Byte streams",
     "Image/file copying",
     "try-catch-finally",
     "CopyImageBytes"
    ],
    "code": "import java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.FileNotFoundException;\nimport java.io.IOException;\npublic class CopyImageBytes {\n    public static void main(String[] args) {\n        FileInputStream fis = null;\n        FileOutputStream fos = null;\n        try {\n            fis = new FileInputStream(\"source_image.jpg\");\n            fos = new FileOutputStream(\"destination_image.jpg\");\n            byte[] buffer = new byte[1024];\n            int length;\n            while ((length = fis.read(buffer)) > 0) {\n                fos.write(buffer, 0, length);\n            }\n            System.out.println(\"Image copied successfully using try-catch-finally.\");\n        } catch (FileNotFoundException e) {\n            System.out.println(\"File not found: \" + e.getMessage());\n        } catch (IOException e) {\n            System.out.println(\"I/O exception occurred: \" + e.getMessage());\n        } finally {\n            try {\n                if (fis != null) fis.close();\n                if (fos != null) fos.close();\n            } catch (IOException e) {\n                System.out.println(\"Error closing streams: \" + e.getMessage());\n            }\n        }\n    }\n}",
    "output": "File not found: source_image.jpg (No such file or directory)"
   }
  ]
 },
 {
  "week": "Week 11",
  "num": 11,
  "title": "Character Streams & Multithreading",
  "summary": "Character stream I/O, the main thread, Thread and Runnable, join() and isAlive().",
  "experiments": [
   {
    "id": "w11-1",
    "title": "Program 1: KeyboardToConsole",
    "topics": [
     "InputStreamReader",
     "PrintWriter",
     "Character streams",
     "KeyboardToConsole"
    ],
    "code": "import java.io.InputStreamReader;\nimport java.io.PrintWriter;\nimport java.io.Reader;\nimport java.io.Writer;\nimport java.io.IOException;\npublic class KeyboardToConsole {\n    public static void main(String[] args) {\n        System.out.println(\"Enter text:\");\n        try (Reader reader = new InputStreamReader(System.in);\n             Writer writer = new PrintWriter(System.out)) {\n            int character;\n            while ((character = reader.read()) != -1) {\n                writer.write(character);\n                writer.flush();\n            }\n        } catch (IOException e) {\n            System.err.println(\"An I/O error occurred: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Enter text:\nJava\nJava\nProgramming\nProgramming"
   },
   {
    "id": "w11-2",
    "title": "Program 2: ReadFileDemo",
    "topics": [
     "FileReader",
     "ReadFileDemo"
    ],
    "code": "import java.io.FileReader;\nimport java.io.IOException;\npublic class ReadFileDemo {\n    public static void main(String[] args) {\n        try (FileReader reader = new FileReader(\"input.txt\")) {\n            int character;\n            System.out.println(\"--- Content of input.txt ---\");\n            while ((character = reader.read()) != -1) {\n                System.out.print((char) character);\n            }\n            System.out.println(\"\\n----------------------------\");\n        } catch (IOException e) {\n            System.err.println(\"Error reading the file: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Error reading the file: input.txt (The system cannot find the file specified)"
   },
   {
    "id": "w11-3",
    "title": "Program 3: WriteFileDemo",
    "topics": [
     "FileWriter",
     "WriteFileDemo"
    ],
    "code": "import java.io.FileWriter;\nimport java.io.IOException;\npublic class WriteFileDemo {\n    public static void main(String[] args) {\n        String textToWrite = \"Hello! This text is written using Java FileWriter.\\nWelcome to Character Streams.\";\n        try (FileWriter writer = new FileWriter(\"output.txt\")) {\n            writer.write(textToWrite);\n            System.out.println(\"Successfully wrote data to output.txt\");\n        } catch (IOException e) {\n            System.err.println(\"Error writing to the file: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Successfully wrote data to output.txt"
   },
   {
    "id": "w11-4",
    "title": "Program 4: CopyFileDemo",
    "topics": [
     "File copying",
     "FileReader",
     "FileWriter",
     "CopyFileDemo"
    ],
    "code": "import java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\npublic class CopyFileDemo {\n    public static void main(String[] args) {\n        try (FileReader reader = new FileReader(\"source.txt\");\n             FileWriter writer = new FileWriter(\"destination.txt\")) {\n            int character;\n            while ((character = reader.read()) != -1) {\n                writer.write(character);\n            }\n            System.out.println(\"File copied successfully from source.txt to destination.txt\");\n        } catch (IOException e) {\n            System.err.println(\"Error during file copy operation: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Error during file copy operation: source.txt (The system cannot find the file specified)"
   },
   {
    "id": "w11-5",
    "title": "Program 5: FileCounterDemo",
    "topics": [
     "File counter",
     "FileCounterDemo"
    ],
    "code": "import java.io.FileReader;\nimport java.io.IOException;\npublic class FileCounterDemo {\n    public static void main(String[] args) {\n        int charCount = 0;\n        int wordCount = 0;\n        int lineCount = 0;\n        boolean inWord = false;\n        try (FileReader reader = new FileReader(\"input.txt\")) {\n            int character;\n            while ((character = reader.read()) != -1) {\n                charCount++;\n                char ch = (char) character;\n                if (ch == '\\n') {\n                    lineCount++;\n                }\n                if (Character.isWhitespace(ch)) {\n                    inWord = false;\n                } else if (!inWord) {\n                    wordCount++;\n                    inWord = true;\n                }\n            }\n            if (charCount > 0 && lineCount == 0) {\n                lineCount = 1;\n            }\n            System.out.println(\"Characters: \" + charCount);\n            System.out.println(\"Words: \" + wordCount);\n            System.out.println(\"Lines: \" + lineCount);\n        } catch (IOException e) {\n            System.err.println(\"Error analyzing file: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Characters: 23\nWords: 4\nLines: 2\n(input.txt contains exactly two lines of text: \"Hello Java\\nStreams Rule\")"
   },
   {
    "id": "w11-6",
    "title": "Program 6: MainThreadDemo",
    "topics": [
     "Main thread",
     "Multithreading",
     "MainThreadDemo"
    ],
    "code": "public class MainThreadDemo {\n    public static void main(String[] args) {\n        Thread mainThread = Thread.currentThread();\n        System.out.println(\"Main Thread Information:\");\n        System.out.println(\"Name: \" + mainThread.getName());\n        System.out.println(\"Priority (1-10): \" + mainThread.getPriority());\n        System.out.println(\"State: \" + mainThread.getState());\n    }\n}",
    "output": "Main Thread Information:\nName: main\nPriority (1-10): 5\nState: RUNNABLE"
   },
   {
    "id": "w11-7",
    "title": "Program 7: ThreadExtensionDemo",
    "topics": [
     "Extending Thread",
     "Multithreading",
     "ThreadExtensionDemo"
    ],
    "code": "class CustomThread extends Thread {\n    @Override\n    public void run() {\n        System.out.println(getName() + \" is running (Extended from Thread class).\");\n    }\n}\npublic class ThreadExtensionDemo {\n    public static void main(String[] args) {\n        CustomThread thread = new CustomThread();\n        thread.setName(\"WorkerThread-1\");\n        thread.start();\n    }\n}",
    "output": "WorkerThread-1 is running (Extended from Thread class)."
   },
   {
    "id": "w11-8",
    "title": "Program 8: RunnableThreadDemo",
    "topics": [
     "Runnable",
     "Multithreading",
     "RunnableThreadDemo"
    ],
    "code": "class CustomRunnable implements Runnable {\n    @Override\n    public void run() {\n        System.out.println(Thread.currentThread().getName() + \" is running (Implemented via Runnable).\");\n    }\n}\npublic class RunnableThreadDemo {\n    public static void main(String[] args) {\n        CustomRunnable runnable = new CustomRunnable();\n        Thread thread = new Thread(runnable, \"WorkerThread-2\");\n        thread.start();\n    }\n}",
    "output": "WorkerThread-2 is running (Implemented via Runnable)."
   },
   {
    "id": "w11-9",
    "title": "Program 9: ConcurrentExecution",
    "topics": [
     "Concurrent execution",
     "Multithreading",
     "ConcurrentExecution"
    ],
    "code": "class InterleavedTask implements Runnable {\n    @Override\n    public void run() {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(Thread.currentThread().getName() + \" processing item: \" + i);\n            try {\n                Thread.sleep(100);\n            } catch (InterruptedException e) {\n                System.out.println(\"Thread execution interrupted\");\n            }\n        }\n    }\n}\npublic class ConcurrentExecution {\n    public static void main(String[] args) {\n        Thread t1 = new Thread(new InterleavedTask(), \"Thread-A\");\n        Thread t2 = new Thread(new InterleavedTask(), \"Thread-B\");\n        Thread t3 = new Thread(new InterleavedTask(), \"Thread-C\");\n        t1.start();\n        t2.start();\n        t3.start();\n    }\n}",
    "output": "Thread-A processing item: 1\nThread-B processing item: 1\nThread-C processing item: 1\nThread-A processing item: 2\nThread-C processing item: 2\nThread-B processing item: 2\nThread-A processing item: 3\nThread-B processing item: 3\nThread-C processing item: 3"
   },
   {
    "id": "w11-10",
    "title": "Program 10: IsAliveDemo",
    "topics": [
     "isAlive()",
     "join()",
     "IsAliveDemo"
    ],
    "code": "public class IsAliveDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Thread thread = new Thread(() -> {\n            try { Thread.sleep(300); } catch (InterruptedException ignored) {}\n        });\n        System.out.println(\"Before start() - Is thread alive? \" + thread.isAlive());\n        thread.start();\n        System.out.println(\"After start() - Is thread alive? \" + thread.isAlive());\n        thread.join();\n        System.out.println(\"After completion - Is thread alive? \" + thread.isAlive());\n    }\n}",
    "output": "Before start() - Is thread alive? false\nAfter start() - Is thread alive? true\nAfter completion - Is thread alive? False"
   },
   {
    "id": "w11-11",
    "title": "Program 11: JoinMethod",
    "topics": [
     "join()",
     "JoinMethod"
    ],
    "code": "public class JoinMethod {\n    public static void main(String[] args) {\n        Thread dependentThread = new Thread(() -> {\n            System.out.println(\"Dependent thread starting heavy computations...\");\n            try {\n                Thread.sleep(1000);\n                System.out.println(\"Dependent thread work finished.\");\n            } catch (InterruptedException e) {\n                System.err.println(e.getMessage());\n            }\n        });\n        dependentThread.start();\n        System.out.println(\"Main thread waiting for dependent thread to conclude via join()...\");\n        try {\n            dependentThread.join();\n        } catch (InterruptedException e) {\n            System.err.println(e.getMessage());\n        }\n        System.out.println(\"Main thread execution resumes and wraps up.\");\n    }\n}",
    "output": "Main thread waiting for dependent thread to conclude via join()...\nDependent thread starting heavy computations...\nDependent thread work finished.\nMain thread execution resumes and wraps up."
   },
   {
    "id": "w11-12",
    "title": "Program 12: ControlledExecution",
    "topics": [
     "Controlled execution",
     "isAlive()",
     "join()",
     "ControlledExecution"
    ],
    "code": "public class ControlledExecution {\n    public static void main(String[] args) throws InterruptedException {\n        Runnable task = () -> {\n            System.out.println(Thread.currentThread().getName() + \" has begun.\");\n            try { Thread.sleep(400); } catch (InterruptedException ignored) {}\n            System.out.println(Thread.currentThread().getName() + \" has completed.\");\n        };\n        Thread t1 = new Thread(task, \"Stage-1\");\n        Thread t2 = new Thread(task, \"Stage-2\");\n        Thread t3 = new Thread(task, \"Stage-3\");\n        t1.start();\n        System.out.println(\"Checking Stage-1 running status: \" + t1.isAlive());\n        t1.join();\n        t2.start();\n        t2.join();\n        t3.start();\n        t3.join();\n        System.out.println(\"All controlled sequencing stages have completed successfully.\");\n    }\n}",
    "output": "Checking Stage-1 running status: true\nStage-1 has begun.\nStage-1 has completed.\nStage-2 has begun.\nStage-2 has completed.\nStage-3 has begun.\nStage-3 has completed.\nAll controlled sequencing stages have completed successfully."
   }
  ]
 }
];

/* ===== Application logic (data above is the only thing you need to edit) ===== */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); };
  var state = { week: 'all', type: 'all', q: '' };

  var normalize = function (s) { return String(s).toLowerCase().replace(/week\s*0*(\d+)/g, 'week $1').replace(/\s+/g, ' ').trim(); };
  var hasCode = function (e) { return !!e.code; };
  var hasShot = function (e) { return !!((e.outputImages && e.outputImages.length) || (e.images && e.images.length)); };
  var hasAim = function (e) { return !!(e.aim && e.result); };
  labData.forEach(function (w) {
    w.experiments.forEach(function (e) {
      e._hay = normalize([w.week, w.title, e.group || '', e.title, (e.topics || []).join(' ')].join(' '));
    });
  });

  /* ---------- Stats ---------- */
  var totalExp = labData.reduce(function (n, w) { return n + w.experiments.length; }, 0);
  var topicSet = {};
  labData.forEach(function (w) { w.experiments.forEach(function (e) { (e.topics || []).forEach(function (t) { topicSet[t.toLowerCase()] = 1; }); }); });
  $('#stats').innerHTML = [
    [labData.length, 'Lab weeks documented'],
    [totalExp, 'Programs / experiments documented'],
    [Object.keys(topicSet).length, 'Java topics &amp; keywords covered']
  ].map(function (s) { return '<div class="stat"><b>' + s[0] + '</b><span>' + s[1] + '</span></div>'; }).join('');

  /* ---------- Week cards ---------- */
  function weekTags(w) {
    var t = [];
    if (w.experiments.some(hasCode)) t.push('Source code');
    if (w.experiments.some(function (e) { return e.output; })) t.push('Output');
    if (w.experiments.some(hasShot)) t.push('Screenshots');
    if (w.experiments.some(hasAim)) t.push('Aim &amp; result');
    return t.map(function (x) { return '<span class="tag">' + x + '</span>'; }).join('');
  }
  $('#weekGrid').innerHTML = labData.map(function (w) {
    return '<button type="button" class="card week-card" data-week="' + w.num + '" aria-label="Open ' + esc(w.week) + ': ' + esc(w.title) + '">' +
      '<span class="wk">' + esc(w.week) + '</span><h3>' + esc(w.title) + '</h3><p>' + esc(w.summary) + '</p>' +
      '<span class="note" style="margin:.2rem 0 0">' + w.experiments.length + (w.experiments.length === 1 ? ' program' : ' programs') + '</span>' +
      '<div class="tags">' + weekTags(w) + '</div></button>';
  }).join('');
  var present = labData.map(function (w) { return w.num; }), missing = [];
  for (var i = 1; i <= Math.max.apply(null, present); i++) if (present.indexOf(i) < 0) missing.push(i);
  $('#missingWeeks').textContent = missing.length ? 'Weeks ' + missing.join(', ') + ' are not part of the uploaded lab documents, so they are not shown.' : '';

  /* ---------- Filters ---------- */
  $('#weekFilter').innerHTML = '<option value="all">All weeks</option>' + labData.map(function (w) { return '<option value="' + w.num + '">' + esc(w.week) + ' – ' + esc(w.title) + '</option>'; }).join('');

  /* ---------- Java highlighter ---------- */
  var KW = 'abstract assert boolean break byte case catch char class continue default do double else enum extends final finally float for if implements import instanceof int interface long new null package private protected public return short static super switch synchronized this throw throws try void volatile while true false var';
  var TOK = new RegExp('(\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)|("(?:\\\\.|[^"\\\\\\n])*"|\'(?:\\\\.|[^\'\\\\\\n])*\')|\\b(' + KW.split(' ').join('|') + ')\\b|\\b(\\d+(?:\\.\\d+)?[fFlLdD]?)\\b', 'g');
  function highlight(code) {
    var out = '', last = 0, m;
    TOK.lastIndex = 0;
    while ((m = TOK.exec(code))) {
      out += esc(code.slice(last, m.index));
      var cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : 'n';
      out += '<span class="' + cls + '">' + esc(m[0]) + '</span>';
      last = m.index + m[0].length;
    }
    return out + esc(code.slice(last));
  }

  /* ---------- Experiment body ---------- */
  function section(h, html) { return html ? '<h4>' + h + '</h4>' + html : ''; }
  function imgs(list, alt) { return '<div class="shots">' + list.map(function (p, i) { return '<a href="' + p + '" target="_blank" rel="noopener"><img src="' + p + '" loading="lazy" alt="' + esc(alt) + ' – screenshot ' + (i + 1) + '"></a>'; }).join('') + '</div>'; }
  function body(e) {
    var h = '';
    if (e.aim) h += section('Aim', '<p>' + esc(e.aim) + '</p>');
    if (e.procedure && e.procedure.length) h += section('Procedure / Description', '<ol>' + e.procedure.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ol>');
    if (e.table) h += section('Comparison Table', '<div class="tablewrap" tabindex="0" role="region" aria-label="Comparison table, scrollable"><table><thead><tr>' + e.table.headers.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      e.table.rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return i ? '<td>' + esc(c) + '</td>' : '<th scope="row">' + esc(c) + '</th>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
    (e.sections || []).forEach(function (s) {
      h += section(esc(s.heading), s.text ? '<p>' + esc(s.text) + '</p>' : '<ul>' + s.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
    });
    if (e.code) h += section('Program / Source Code', '<div class="codebox"><div class="codebar"><span>JAVA</span><button type="button" class="copy" aria-label="Copy code for ' + esc(e.title) + '">Copy Code</button></div><pre tabindex="0"><code>' + highlight(e.code) + '</code></pre></div>');
    if (e.output) h += section('Output', '<pre class="out" tabindex="0">' + esc(e.output) + '</pre>');
    if (e.outputImages) h += section('Output (screenshot)', imgs(e.outputImages, e.title + ' output'));
    if (e.images) h += section('Screenshots from the document', imgs(e.images, e.title));
    if (e.result) h += section('Result', '<p>' + esc(e.result) + '</p>');
    if (e.note) h += '<p class="note">' + esc(e.note) + '</p>';
    return h;
  }

  /* ---------- Program list ---------- */
  function matches(w, e) {
    if (state.week !== 'all' && String(w.num) !== state.week) return false;
    if (state.type === 'code' && !hasCode(e)) return false;
    if (state.type === 'shot' && !hasShot(e)) return false;
    if (state.type === 'aim' && !hasAim(e)) return false;
    var q = normalize(state.q), wm = q.match(/week (\d+)/);
    if (wm) { if (String(w.num) !== wm[1]) return false; q = q.replace(wm[0], ''); }
    var hay = e._hay;
    return q.split(' ').filter(Boolean).every(function (t) { return hay.indexOf(t) >= 0; });
  }
  function renderList() {
    var count = 0, html = '', hits = [];
    labData.forEach(function (w) {
      var list = w.experiments.filter(function (e) { return matches(w, e); });
      if (!list.length) return;
      count += list.length; hits.push([w, list]);
    });
    var autoOpen = count <= 3;
    hits.forEach(function (h) {
      var w = h[0];
      html += '<div class="week-group"><h3>' + esc(w.week) + ': ' + esc(w.title) + '</h3><span>' + h[1].length + ' shown</span></div>';
      var lastGroup = '';
      h[1].forEach(function (e) {
        if (e.group && e.group !== lastGroup) { html += '<p class="note" style="margin:1rem 0 .5rem"><strong>' + esc(e.group) + '</strong></p>'; lastGroup = e.group; }
        html += '<details class="exp" data-id="' + e.id + '"' + (autoOpen ? ' open' : '') + '><summary><span class="exp-title">' + esc(e.title) + '</span></summary><div class="exp-body">' + (autoOpen ? body(e) : '') + '</div></details>';
      });
    });
    $('#programList').innerHTML = html || '<p class="card" style="padding:1.25rem">No programs match your search. Try a week number, a class name or a topic such as “inheritance”.</p>';
    $('#resultCount').textContent = count + (count === 1 ? ' program' : ' programs') + ' shown';
  }
  function find(id) { for (var i = 0; i < labData.length; i++) for (var j = 0; j < labData[i].experiments.length; j++) if (labData[i].experiments[j].id === id) return labData[i].experiments[j]; }
  $('#programList').addEventListener('toggle', function (ev) {
    var d = ev.target;
    if (d.classList && d.classList.contains('exp') && d.open) {
      var box = d.querySelector('.exp-body');
      if (!box.firstChild) box.innerHTML = body(find(d.dataset.id));
    }
  }, true);

  /* ---------- Copy code ---------- */
  var toastTimer;
  function toast(msg) { var t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('show'); }, 1800); }
  function fallbackCopy(text) { var a = document.createElement('textarea'); a.value = text; a.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); } catch (e) {} a.remove(); }
  $('#programList').addEventListener('click', function (ev) {
    var b = ev.target.closest('.copy'); if (!b) return;
    var text = b.closest('.codebox').querySelector('code').textContent;
    var done = function () { toast('Code copied!'); b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy Code'; }, 1500); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    else { fallbackCopy(text); done(); }
  });

  /* ---------- Controls ---------- */
  $('#search').addEventListener('input', function (e) { state.q = e.target.value; renderList(); });
  $('#weekFilter').addEventListener('change', function (e) { state.week = e.target.value; renderList(); });
  $('#typeFilter').addEventListener('change', function (e) { state.type = e.target.value; renderList(); });
  $('#resetFilters').addEventListener('click', function () { state = { week: 'all', type: 'all', q: '' }; $('#search').value = ''; $('#weekFilter').value = 'all'; $('#typeFilter').value = 'all'; renderList(); });
  $('#weekGrid').addEventListener('click', function (ev) {
    var c = ev.target.closest('.week-card'); if (!c) return;
    state = { week: c.dataset.week, type: 'all', q: '' };
    $('#search').value = ''; $('#weekFilter').value = state.week; $('#typeFilter').value = 'all';
    renderList(); $('#programs').scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- Progress (documented content only) ---------- */
  var maxN = Math.max.apply(null, labData.map(function (w) { return w.experiments.length; }));
  $('#progressList').innerHTML = labData.map(function (w) {
    var n = w.experiments.length, c = w.experiments.filter(hasCode).length, o = w.experiments.filter(function (e) { return e.output; }).length, s = w.experiments.filter(hasShot).length;
    return '<article class="card p-row"><div class="p-head"><b>' + esc(w.week) + ' · ' + esc(w.title) + '</b><span>' + n + ' documented ' + (n === 1 ? 'program' : 'programs') + '</span></div>' +
      '<div class="bar-track" role="img" aria-label="' + n + ' documented programs out of the largest week of ' + maxN + '"><div class="bar-fill" data-w="' + Math.round(n / maxN * 100) + '"></div></div>' +
      '<div class="tags"><span class="tag">' + c + ' with source code</span><span class="tag">' + o + ' with text output</span><span class="tag">' + s + ' with screenshots</span></div></article>';
  }).join('');

  /* ---------- Theme ---------- */
  var root = document.documentElement;
  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    $('#themeIcon').textContent = t === 'dark' ? '☀' : '☾';
    $('#themeToggle').setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  applyTheme(root.getAttribute('data-theme') || 'light');
  $('#themeToggle').addEventListener('click', function () {
    var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(t); try { localStorage.setItem('theme', t); } catch (e) {}
  });

  /* ---------- Mobile menu ---------- */
  var nav = $('#nav'), mb = $('#menuToggle');
  function setMenu(o) { nav.classList.toggle('open', o); mb.setAttribute('aria-expanded', o); mb.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); }
  mb.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Active nav, reveal, back-to-top ---------- */
  var links = {}; document.querySelectorAll('[data-link]').forEach(function (a) { links[a.dataset.link] = a; });
  function markActive() {
    var cur = 'home', y = window.scrollY + 120;
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s && s.offsetTop <= y) cur = id; });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) cur = 'about';
    Object.keys(links).forEach(function (id) { links[id].classList.toggle('active', id === cur); if (id === cur) links[id].setAttribute('aria-current', 'true'); else links[id].removeAttribute('aria-current'); });
  }
  var tt = $('#toTop');
  window.addEventListener('scroll', function () { markActive(); tt.hidden = window.scrollY < 600; }, { passive: true });
  tt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  var animate = function (el) { el.classList.add('in'); el.querySelectorAll('.bar-fill').forEach(function (b) { b.style.width = b.dataset.w + '%'; }); };
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { animate(x.target); io.unobserve(x.target); } }); }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else { document.querySelectorAll('.reveal').forEach(animate); }

  renderList(); markActive();
})();
