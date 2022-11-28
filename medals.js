const menuIconURI = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC40MzkgMzAwLjQzOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLjQzOSAzMDAuNDM5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojQkYzOTJDOyIgZD0iTTI3Ni45NjcsMGgtODQuNDk4TDcwLjQxNSwxNzguMzg1aDg0LjQ5OEwyNzYuOTY3LDB6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0UyNTc0QzsiIGQ9Ik0yMy40NzIsMGg4NC40OThsMTIyLjA1MywxNzguMzg1aC04NC40OThMMjMuNDcyLDB6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0VGQzc1RTsiIGQ9Ik0xNTQuOTE0LDkzLjg4N2M1Ny4yNzEsMCwxMDMuMjc2LDQ2LjAwNSwxMDMuMjc2LDEwMy4yNzZzLTQ2LjAwNSwxMDMuMjc2LTEwMy4yNzYsMTAzLjI3Ng0KCQlTNTEuNjM4LDI1NC40MzQsNTEuNjM4LDE5Ny4xNjNTOTcuNjQzLDkzLjg4NywxNTQuOTE0LDkzLjg4N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDdCMzU0OyIgZD0iTTE1NC45MTQsMTIyLjA1M2MtNDEuMzEsMC03NS4xMSwzMy43OTktNzUuMTEsNzUuMTFzMzMuNzk5LDc1LjExLDc1LjExLDc1LjExDQoJCXM3NS4xMS0zMy43OTksNzUuMTEtNzUuMTFTMTk2LjIyNCwxMjIuMDUzLDE1NC45MTQsMTIyLjA1M3ogTTE1NC45MTQsMjUzLjQ5NWMtMzAuOTgzLDAtNTYuMzMyLTI1LjM1LTU2LjMzMi01Ni4zMzINCgkJczI1LjM1LTU2LjMzMiw1Ni4zMzItNTYuMzMyczU2LjMzMiwyNS4zNSw1Ni4zMzIsNTYuMzMyUzE4NS44OTYsMjUzLjQ5NSwxNTQuOTE0LDI1My40OTV6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";
const blockIconURI = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC40MzkgMzAwLjQzOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLjQzOSAzMDAuNDM5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojQkYzOTJDOyIgZD0iTTI3Ni45NjcsMGgtODQuNDk4TDcwLjQxNSwxNzguMzg1aDg0LjQ5OEwyNzYuOTY3LDB6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0UyNTc0QzsiIGQ9Ik0yMy40NzIsMGg4NC40OThsMTIyLjA1MywxNzguMzg1aC04NC40OThMMjMuNDcyLDB6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0VGQzc1RTsiIGQ9Ik0xNTQuOTE0LDkzLjg4N2M1Ny4yNzEsMCwxMDMuMjc2LDQ2LjAwNSwxMDMuMjc2LDEwMy4yNzZzLTQ2LjAwNSwxMDMuMjc2LTEwMy4yNzYsMTAzLjI3Ng0KCQlTNTEuNjM4LDI1NC40MzQsNTEuNjM4LDE5Ny4xNjNTOTcuNjQzLDkzLjg4NywxNTQuOTE0LDkzLjg4N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDdCMzU0OyIgZD0iTTE1NC45MTQsMTIyLjA1M2MtNDEuMzEsMC03NS4xMSwzMy43OTktNzUuMTEsNzUuMTFzMzMuNzk5LDc1LjExLDc1LjExLDc1LjExDQoJCXM3NS4xMS0zMy43OTksNzUuMTEtNzUuMTFTMTk2LjIyNCwxMjIuMDUzLDE1NC45MTQsMTIyLjA1M3ogTTE1NC45MTQsMjUzLjQ5NWMtMzAuOTgzLDAtNTYuMzMyLTI1LjM1LTU2LjMzMi01Ni4zMzINCgkJczI1LjM1LTU2LjMzMiw1Ni4zMzItNTYuMzMyczU2LjMzMiwyNS4zNSw1Ni4zMzIsNTYuMzMyUzE4NS44OTYsMjUzLjQ5NSwxNTQuOTE0LDI1My40OTV6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";

class ScratchMedalsExt {
  getInfo() {
    return {
      id: 'scratchmedalsext', // change this if you make an actual extension!
      name: 'Medals',
      color1: '#fff800',
      color2: '#a59a0d',
      menuIconURI: menuIconURI,
      blockIconURI: blockIconURI,
      blocks: [
        {
          opcode: 'getusers',
          blockType: Scratch.BlockType.REPORTER,
          text: 'All Users',
          disableMonitor: true
        },
        {
          opcode: 'getuser',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get User [USER]',
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'The_Mad_Punter'
            }
          },
          disableMonitor: true
        },
        {
          opcode: 'givemedal',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Give Player Medal [USER] with game [GAME] and Medal ID [ID]',
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'The_Mad_Punter'
            },
            GAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'benji1'
            },
            ID: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'winner'
            }
          }
        },
        {
          opcode: 'hasmedal',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Player [USER] has medal [ID] from game [GAME]?',
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'The_Mad_Punter'
            },
            GAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'benji1'
            },
            ID: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'winner'
            }
          }
        },
        {
          opcode: 'ping',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Boot Server'
        }
      ]
    };
  }
  getusers() {
    return fetch("https://scratchmedals.themadpunter.repl.co/api/v1/users/all", { method: 'GET' })
      .then(res => res.text())
      .catch(err => '')
  }
  getuser(args) {
    return fetch("https://scratchmedals.themadpunter.repl.co/api/v1/users/user/".concat(args.USER), { method: 'GET' })
      .then(res => res.text())
      .catch(err => '')
  }
  givemedal(args) {
    return fetch("https://scratchmedals.themadpunter.repl.co/api/v1/medals/give/".concat(args.USER,"/",args.GAME,"/",args.ID), { method: 'GET' })
      .then(res => res.text())
      .catch(err => '')
  }
  hasmedal(args) {
    var bone = fetch("https://scratchmedals.themadpunter.repl.co/api/v1/medals/check/".concat(args.USER,"/",args.GAME,"/",args.ID), { method: 'GET' })
      .then(res => res.text())
      .catch(err => '')
    let myBool = !(bone === 'true');
    return bone
  }
  ping() {
    return fetch("https://scratchmedals.themadpunter.repl.co/ping", { method: 'GET' })
      .then(res => res.text())
      .catch(err => '')
  }
}
Scratch.extensions.register(new ScratchMedalsExt());
