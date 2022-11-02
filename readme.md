School Reports company

Help teachers find out how students did on test

INPUT: string of comma separated values with test results from school

OUTPUT: report

INPUT                               ||     OUTPUT
------------------------------------||-----------------
Green                               ||      "Green: 1"
Green, Green                        ||      "Green: 2"
Green, Amber                        ||      "Green: 1\nAmber: 1"
Green, Green, Amber                 ||      "Green: 2\nAmber: 1"
Green, Amber, Red                   ||      "Green: 1\nAmber: 1\nRed: 1"
Green, Green, Red, Amber, Red"      ||      "Green: 2\nAmber: 1\nRed: 2"


If input is not a string, throw an error: ArgumentError "Input must be a comma-separated string"