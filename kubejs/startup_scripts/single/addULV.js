GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

    event.create("induction_smelting")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(2, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

    event.create("pulverizing")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);

    event.create("pressing")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);

    event.create("waterwell")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(1, 0, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('induction_smelter', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            return builder
                .recipeType('induction_smelting')
                .workableTieredHullModel("gtceu:block/machines/alloy_smelter")
        })

    event.create('multiservo_press', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            return builder
                .recipeType('pressing')
                .workableTieredHullModel("gtceu:block/machines/forge_hammer")
        })

    event.create('pulverizer', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            return builder
                .recipeType('pulverizing')
                .workableTieredHullModel("gtceu:block/machines/macerator")
        })

    event.create('water_well', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            return builder
                .recipeType('waterwell')
                .workableTieredHullModel("gtceu:block/machines/extractor")
        })

    
})