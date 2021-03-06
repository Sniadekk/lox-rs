export default {
  languageOverview: `// for loop

    for(var x = 0; x <= 10; x = x + 1){
        print x;
    }
    
    // while loop
    
    var y = 0;
    while(y <= 10) {
        print y;
        y = y + 1;
    }
    
    // functions
    
    fn foo() {
        print "foo";
    }
    
    // lexical scoping
    
    var bar = "bar";
    {
        var bar = "bar2";
        {
            var bar = "bar3";
            print bar;
        }
        print bar;
    }
    
    print bar;
    
    // binding variables
    
    var a = "global";
    {
      fn showA() {
        print a;
      }
    
      showA();
      var a = "block";
      showA();
    }
    
    // closures
    
    fn getClosure() {
        return |a, b| => a + b;
    }
    
    var closure = getClosure();
    print closure(10, 10);
    // TODO: second closure doesn't know about variables from the first one, probably
    var nestedClosure = |a, b| => |c| => a + b + c;
    print nestedClosure;
    var closure = nestedClosure(10, 10);
    print closure;
    print closure(10);
    
    // Control flow
    
    var isTrue = true;
    if (isTrue) {
        print "this will print, because statement is true";
    } else {
        print "this wont print";
    }
    
    var isTrue = false;
    if(isTrue) {
        print "this wont print";
    } else {
        print "this will print, because statement is false";
    }
    
    // classes
    
    class MyClass {
    
        whoAmI() {
            print "I am an instance of MyClass";
        }
    }
    
    var myClassInstance = MyClass();
    myClassInstance.whoAmI();
    print myClassInstance;
    
    // inheritance
    class InheritingClass : MyClass {
    
        callMe() {
            super.whoAmI();
            this.whoAmI();
            print "I am an instance of InheritingClass";
        }
    }
    
    var inheritingClassInstance = InheritingClass();
    inheritingClassInstance.callMe();
    `,
  lexerErrors: `  // LEXER ERRORS
  var someString = "not closed;
  `,
  parserErrors: `// Expected close bar
  var foo = | => a;
  // Expected arrow after closure declaration
  var foo = | | { print "hello!"; };
  // Expected semicolon
  var foo = "bar"
  // Expected function to have an identifier
  fn test () { }
  // Unparsable expression
  while (`,
  staticAnalysisErrors: `// Can't use outside of the loop
  break;
  continue;
  // Can't use outside of the class
  print this;
  // Can't use outside of the class or class without superclass
  print super.something;
  // Can't use in its own initializer
  var a = a;
  // Can't inherit from itself
  class Inherited : Inherited {}
  
  class NotInheriting {
    // Can't use super inside a class without superclass
    someMethod() {
        print super.something;
    }
  }`,
};
