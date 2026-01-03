//Event for getting sand and gravel with hammer
BlockEvents.broken(event => {
  const { block, player, server } = event;
  const item = player.mainHandItem;

  if (item.id != 'kubejs:hammer') return;

  function dropItem(id) {
    server.runCommandSilent(
      `summon item ${block.x + 0.5} ${block.y + 0.5} ${block.z + 0.5} {Item:{id:"${id}",Count:1b}}`
    );
  }

  if (block.id == 'minecraft:cobblestone') {
    dropItem('minecraft:gravel');
    block.set('minecraft:air');
    item.damage(1, player); 
    event.cancel();
  }

  if (block.id == 'minecraft:gravel') {
    dropItem('minecraft:sand');
    block.set('minecraft:air');
    item.damage(1, player); 
    event.cancel();
  }
});