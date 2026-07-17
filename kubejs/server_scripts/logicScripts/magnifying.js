BlockEvents.rightClicked(event => {
  const { block, player, server, hand } = event;
  const item = player.mainHandItem;

  if (hand != 'MAIN_HAND' && hand != 'main_hand') return;

  if (item.id != 'kubejs:magnifying') return;

  function dropItem(id) {
    server.runCommandSilent(
      `summon item ${block.x + 0.5} ${block.y + 0.5} ${block.z + 0.5} {Item:{id:"${id}",Count:1b}}`
    );
  }

  if (block.id == 'minecraft:reinforced_deepslate' || block.id == 'minecraft:end_portal_frame') {
    
    dropItem(block.id);
    
    block.set('minecraft:air');
    event.cancel();
  }
});