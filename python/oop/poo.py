class Person: 
    def __init__(self, fname, lname):
        self.fname = fname
        self.lname = lname

    def welcome(self):
        print("Hello", self.fname, self.lname)

class Student(Person):
    def __init__(self, fname, lname, year):
        super().__init__(fname, lname)
        self.graduationyear = year
    
    def welcome(self):
        print("Welcome", self.fname,  self.lname, "graduation", self.graduationyear)

s1 = Student("Isaac", "Maldonado", 2019)
p1 = Person("Cristal", "Maldonado")
p1.welcome()
s1.welcome()

