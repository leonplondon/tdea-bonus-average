# Grades bonus

Below we gonna a small project presented as bonus task for TdeA course `Introduction to Node.js`

## Getting Started

To start executing the source code, please fork/clone the repository and follow `Installing` section.

### Prerequisites

* Node.js
* NPM

### Installing

```sh
> npm install
```

## Instructions

### List all students

```sh
node app showAll
```

### Create a new student
```sh
Options:
  --help              Show help                  [boolean]
  --version           Show version number        [boolean]
  --name, -n                                     [required]
  --math, -m                                     [required]
  --english, -e                                  [required]
  --programming, -p                              [required]
```

```sh
node app.js createStudent -n <name> -m <grade> -e <grade> -p <grade>
```

### Show a student
```sh
Options:
  --help              Show help                  [boolean]
  --version           Show version number        [boolean]
  --name, -n                                     [required]
```

```sh
node app showStudent -n <name>
```

### Show average of a student
```sh
Options:
  --help              Show help                 [boolean]
  --version           Show version number       [boolean]
  --name, -n                                    [required]
```

```sh
node app showAverageOfStudent -n <name>
```

### Show students with an average greater or equal to 3.0
```sh
node app.js studentsAverage
```

### Update a student
```sh
Options:
  --help              Show help                 [boolean]
  --version           Show version number       [boolean]
  --name, -n                                    [required]
  --subject, -s                                 [required]
  --grade, -g                                   [required]
```

```sh
node app.js updateStudent  -n <name> -s <subject> -g <grade>
```

### Remove a student
```sh
Options:
  --help              Show help                 [boolean]
  --version           Show version number       [boolean]
  --name, -n                                    [required]
```

```sh
node app.js removeStudent -n <name>
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Darío Peña Londoño** - *Main developer* - [leonplondon](https://github.com/leonplondon)

## License

```
MIT License
Copyright (c) 2016 León Darío Peña

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```