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
      ]
    };
  }
  getusers() {
    return fetch("https://scratchmedals.themadpunter.repl.co/api/v1/users/all", { method: 'GET' })
      .then(res => res.text())
      .catch(err => '')
  }
}
Scratch.extensions.register(new ScratchMedalsExt());
