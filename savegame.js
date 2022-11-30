class LocalStorageExtension {
  getInfo() {
    return {
      id: 'localstorageextension', // change this if you make an actual extension!
      name: 'Save Game',
      blocks: [
        {
          opcode: 'setData',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set Item [ONE] to [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'level at'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            }
          }
        },
        {
          opcode: 'getData',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get Item [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'level at'
            }
          },
          disableMonitor: true;
        }
      ]
    };
  }
  setData(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    localStorage.setItem(args.ONE, args.TWO);
  }
  getData(args) {
    return localStorage.getItem(args.ONE);
  }
}
Scratch.extensions.register(new LocalStorageExtension());
