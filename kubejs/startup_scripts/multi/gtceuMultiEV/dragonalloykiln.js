GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

  event
    .create("dragonalloykiln")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(9, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("dragonalloykiln", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('dragonalloykiln')
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle("##IIIII##", "##AAAAA##", "##AAAAA##", "##AAAAA##", "#########", "#########", "#########", "#A#####A#", "#A#####A#")
        .aisle("#IAAEAAI#", "#A#G#G#A#", "#A#FGF#A#", "#A##H##A#", "#AAAAAAA#", "#AA###AA#", "#AA###AA#", "#A#####A#", "#########")
        .aisle("IAAAAAAAI", "A##CCC##A", "A#######A", "A#######A", "#AAAAAAA#", "#AA###AA#", "#A#####A#", "#########", "#########")
        .aisle("IAAAAAAAI", "A#######A", "A#######A", "A#######A", "#AA###AA#", "#AAAAAAA#", "#A#####A#", "#########", "#########")
        .aisle("IAAAAAAAI", "#########", "A#######A", "AA#####AA", "#AA###AA#", "#BAAAAAB#", "#A#####A#", "#########", "#########")
        .aisle("#IAAAAAI#", "#D#####D#", "#########", "#D#####D#", "#A#####A#", "#BAAAAAB#", "#A#####A#", "#########", "#########")
        .aisle("#IAAAAAI#", "#########", "#########", "#########", "#########", "#AAAAAAA#", "###AAA###", "#########", "#########")
        .aisle("#IAAAAAI#", "#D#####D#", "#########", "#########", "#D#####D#", "#AA###AA#", "###AAA###", "#########", "#########")
        .aisle("##IAAAI##", "#########", "#########", "#########", "#########", "##A###A##", "##AAAAA##", "#########", "#########")
        .aisle("###IJI###", "###D#D###", "#########", "#########", "#########", "###D#D###", "###AAA###", "#########", "#########")
        .where("A", Predicates.blocks('minecraft:obsidian'))
        .where("B", Predicates.blocks('minecraft:redstone_block'))
        .where("C", Predicates.blocks('minecraft:iron_bars'))
        .where("D", Predicates.blocks('minecraft:bone_block'))
        .where("E", Predicates.blocks('minecraft:magma_block'))
        .where("F", Predicates.blocks('minecraft:brick_slab'))
        .where("G", Predicates.blocks('minecraft:bricks'))
        .where("H", Predicates.blocks('minecraft:brick_wall'))
        .where("I", Predicates.blocks('minecraft:obsidian')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1)))
        .where("J", Predicates.controller(Predicates.blocks(definition.get())))
        .where("#", Predicates.any())
    .build())
    .workableCasingModel(
      'minecraft:block/obsidian',
      'gtceu:block/multiblock/distillation_tower'
    );
});
