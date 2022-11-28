class ScratchMedalsExt {
  getInfo() {
    return {
      id: 'scratchmedalsext', // change this if you make an actual extension!
      name: 'Medals',
      blocks: [
        {
          opcode: 'getusers',
          blockType: Scratch.BlockType.REPORTER,
          text: 'All Users'
        },
        {
          opcode: 'getuser',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get User [USER]'
          arguments: {
            "USER": {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'The_Mad_Punter'
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
    return fetch(concat("https://scratchmedals.themadpunter.repl.co/api/v1/users/user?id=", args.USER), { method: 'GET' })
      .then(res => res.text())
      .catch(err => '')
  }
}
Scratch.extensions.register(new ScratchMedalsExt());
