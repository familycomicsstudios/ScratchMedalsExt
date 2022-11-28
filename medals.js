class ScratchMedalsExt {
  getInfo() {
    return {
      id: 'scratchmedalsext', // change this if you make an actual extension!
      name: 'Medals',
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
    let myBool = (bone.toLowerCase() === 'true');
    return myBool
  }
}
Scratch.extensions.register(new ScratchMedalsExt());
