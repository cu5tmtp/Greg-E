GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("forgef")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(9, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARC_FURNACE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("anvilf")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(6, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARC_FURNACE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.FURNACE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("forgef", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes(['forgef', 'anvilf'])
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("EOOOOOOOOOOOE", "EJJJJJJJJJJJE", "G##JJJJJJJ##G", "###JJJJJJJ###", "###JJJJJJJ###", "###JJJJJJJ###", "###JJJJJJJ###", "###JJJJJJJ###", "###JJJJJJJ###", "###JJJJJJJ###", "###JJJJJJJ###", "###IJJJJJI###", "#####IJI#####")
        .aisle("OAAAAAAAAAAAO", "JNNJ#####JNNJ", "###J#####J###", "###J#####J###", "###J#####J###", "###J#####J###", "###J#####J###", "###J#####J###", "###J#####J###", "###J##A##J###", "###J#####J###", "###IJJJJJI###", "#####IJI#####")
        .aisle("OAAAAAAAAAAAO", "JNNJLLLMMJNNJ", "###JLLLMMJ###", "###JKLMMKJ###", "###JKKLLLJ###", "###JKKLLMJ###", "###JLMMMMJ###", "###JLLLMMJ###", "###JKLMMMJ###", "###JLKNLMJ###", "###JMLKKKJ###", "###IJJJJJI###", "#####IJI#####")
        .aisle("OAAAAAAAAAAAO", "JNNJNNNNNJNNJ", "###J#####J###", "###J#####J###", "###J#####J###", "###E#R#R#E###", "###J#G#G#J###", "###J#####J###", "###J##E##J###", "###E#JQJ#E###", "###J#####J###", "###IJJJJJI###", "#####IJI#####")
        .aisle("OAAAAAAAAAAAO", "JNNNNNNNNNNNJ", "#############", "#############", "#############", "#############", "#############", "#############", "######E######", "#####IQI#####", "#############", "#############", "#############")
        .aisle("OAAAAAAAAAAAO", "JNNNNNNNNNNNJ", "######Q######", "######Q######", "######Q######", "######Q######", "######Q######", "######Q######", "######Q######", "######Q######", "#############", "#############", "#############")
        .aisle("EOOOEAAAEOOOE", "EJJJENNNEJJJE", "G###G###G###G", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
        .aisle("###HOAAAOH###", "####JNNNJ####", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
        .aisle("###HOAAAOH###", "####JNNNJ####", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
        .aisle("###DOAAAOD###", "####JNNNJ####", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
        .aisle("###DOAAAOD###", "####JNENJ####", "######D######", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
        .aisle("###BOAAAOB###", "####JNNNJ####", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
        .aisle("####EFPFE####", "####EJJJE####", "####G###G####", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
        .where("A", Predicates.blocks('minecraft:cobblestone'))
        .where("B", Predicates.blocks('minecraft:cauldron'))
        .where("C", Predicates.blocks('minecraft:polished_blackstone_brick_stairs'))
        .where("D", Predicates.blocks('minecraft:anvil'))
        .where("E", Predicates.blocks('minecraft:chiseled_polished_blackstone'))
        .where("F", Predicates.blocks('minecraft:blast_furnace'))
        .where("G", Predicates.blocks('minecraft:lantern'))
        .where("H", Predicates.blocks('minecraft:grindstone'))
        .where("I", Predicates.blocks('minecraft:polished_blackstone_brick_slab'))
        .where("J", Predicates.blocks('minecraft:polished_blackstone_bricks'))
        .where("K", Predicates.blocks('minecraft:stone_bricks'))
        .where("L", Predicates.blocks('minecraft:stone'))
        .where("M", Predicates.blocks('minecraft:polished_andesite'))
        .where('N', Predicates.fluids('minecraft:lava'))
        .where("O", Predicates.blocks('minecraft:polished_blackstone_bricks')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1)))
        .where("P", Predicates.controller(Predicates.blocks(definition.get())))
        .where('Q', Predicates.fluids('minecraft:flowing_lava'))
        .where('R', Predicates.blocks('minecraft:cobblestone_wall'))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      'minecraft:block/polished_blackstone_bricks',
      'gtceu:block/multiblock/distillation_tower'
    );

});
