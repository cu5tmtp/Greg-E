ItemEvents.rightClicked('kubejs:recall_pendant', event => {
    let player = event.player;
    let level = event.level;

    if (!level.isClientSide()) {
        let spawnPos = player.getRespawnPosition();
        let spawnDimension = player.getRespawnDimension();
        let server = level.getServer();
        
        let targetLevel;
        let targetPos;
        let targetDimensionId;

        if (spawnPos != null) {
            targetDimensionId = spawnDimension.location().toString();
            targetLevel = server.getLevel(targetDimensionId);
            targetPos = spawnPos;
        } else {
            targetDimensionId = 'minecraft:overworld';
            targetLevel = server.overworld();
            targetPos = targetLevel.getSharedSpawnPos();
            player.tell('§cYour spawn point is broken, teleporting you to 0, 0, 0.');
        }

        player.teleportTo(
            targetDimensionId, 
            targetPos.getX() + 0.5, 
            targetPos.getY(), 
            targetPos.getZ() + 0.5, 
            player.yaw, 
            player.pitch
        );

        targetLevel.playSound(null, targetPos.getX(), targetPos.getY(), targetPos.getZ(), 'minecraft:entity.enderman.teleport', 'players', 1.0, 1.0);
        player.swing(event.hand);
        player.addItemCooldown('kubejs:recall_pendant', 2000);
    }
});