GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("laboratory")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("laboratory", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("laboratory")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
        .aisle('HHHHHHH', 'AAAAAAA', 'AAEEEAA', 'AAAAAAA', 'AAAAAAA')
        .aisle('HJJJJJH', 'AFLCCDA', 'A     A', 'A     A', 'AAAAAAA')
        .aisle('HJJJJJH', 'AF    A', 'A     E', 'A     A', 'AAAAAAA')
        .aisle('HJJJJJH', 'AF    A', 'AF    E', 'AF    A', 'AAAAAAA')
        .aisle('HJJJJJH', 'AF    A', 'AG    E', 'AF    A', 'AAAAAAA')
        .aisle('HJJJJJH', 'AB    A', 'AB    A', 'AB    A', 'AAAAAAA')
        .aisle('HHHIHHH', 'AAAKAAA', 'AAAKAAA', 'ABAAAAA', 'AAAAAAA')
        .where("A", Predicates.blocks('chisel_chipped_integration:laboratory_tiles'))
        .where("B", Predicates.blocks('chisel_chipped_integration:laboratory_vents'))
        .where("C", Predicates.blocks('minecraft:crafting_table'))
        .where("D", Predicates.blocks('minecraft:smithing_table'))
        .where("E", Predicates.blocks('gtceu:laminated_glass'))
        .where("F", Predicates.blocks('gtceu:advanced_computer_casing'))
        .where("G", Predicates.blocks('gtceu:monitor'))
        .where("K", Predicates.blocks('minecraft:iron_door'))
        .where("J", Predicates.blocks('chisel_chipped_integration:laboratory_dark_medium_tiles'))
        .where("L", Predicates.blocks('gtceu:zpm_scanner'))
        .where("H", Predicates.blocks('chisel_chipped_integration:laboratory_tiles')
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))  
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1).setPreviewCount(1)) 
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
        .where("I", Predicates.controller(Predicates.blocks(definition.get())))
        .where(" ", Predicates.any())
    .build())
    .workableCasingModel(
      "kubejs:block/chisel/largetile",
      "gtceu:block/multiblock/distillation_tower"
    );
});