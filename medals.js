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
            }
          }
        }
      ]
    };
  }
  getusers() {
    return fetch('https://scratchmedals.themadpunter.repl.co/api/v1/users/all', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
  }
}
Scratch.extensions.register(new ScratchMedalsExt());
