GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("industrialfilter")
    .category("multiblock")
    .setEUIO("in")
    .setMaxIOSize(3, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.SCIENCE);
});

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("industrialfilter", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("industrialfilter")
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeModifiers([GTRecipeModifiers.OC_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
    .pattern((definition) => FactoryBlockPattern.start()
      .aisle("hhhhhhh", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb")
      .aisle("haaaaah", "bdbbbdb", "bdbbbdb", "bdbbbdb", "bdbbbdb", "bdbbbdb", "bdbbbdb", "bdbbbdb", "bdcccdb", "bdcccdb", "bcceccb", "bcceccb", "bcceccb", "bcceccb", "bbcccbb", "bbbbbbb")
      .aisle("haaaaah", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbcbbb", "bbbcbbb", "bbcccbb", "bbcccbb", "bccbccb", "bcbbbcb", "bcbbbcb", "bcbbbcb", "bcbbbcb", "bcbbbcb", "bcbbbcb", "bbcccbb")
      .aisle("haaaaah", "bbbbbbb", "bbbibbb", "bbbcbbb", "bbcbcbb", "bbcbcbb", "bbcbcbb", "bbcfcbb", "bcbbbcb", "bcbbbcb", "bebbbeb", "bebbbeb", "bebbbeb", "bebbbeb", "bcbbbcb", "bbcccbb")
      .aisle("haaaaah", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbcbbb", "bbbcbbb", "bbcccbb", "bbcccbb", "bccbccb", "bcbbbcb", "bcbbbcb", "bcbbbcb", "bcbbbcb", "bcbbbcb", "bcbbbcb", "bbcccbb")
      .aisle("haaaaah", "bdbbbdb", "bdbbbdb", "bdbbbdb", "bdbbbdb", "bdbbbdb", "bdbbbdb", "bdbbbdb", "bdcccdb", "bdcccdb", "bcceccb", "bcceccb", "bcceccb", "bcceccb", "bbcccbb", "bbbbbbb")
      .aisle("hhhghhh", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb", "bbbbbbb")
      .where("a", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
      .where("b", Predicates.blocks("minecraft:air"))
      .where("c", Predicates.blocks("gtceu:reaction_safe_mixing_casing"))
      .where("d", Predicates.blocks("gtceu:sturdy_machine_casing"))
      .where("e", Predicates.blocks("gtceu:fusion_glass"))
      .where("f", Predicates.blocks("gtceu:slicing_blades"))
      .where("g", Predicates.controller(Predicates.blocks(definition.get())))
      .where("h", Predicates.blocks("gtceu:high_temperature_smelting_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2).setPreviewCount(2)))  
      .where("i", Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))    
    .build())
    .workableCasingModel(
      "gtceu:block/casings/gcym/high_temperature_smelting_casing",
      "gtceu:block/multiblock/distillation_tower"
    );
});