GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

    event.create("magicalforge")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(9, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('magicalforge', 'simple')
        .tiers([GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV])
        .definition((tier, builder) => {
            return builder
                .recipeType('magicalforge')
                .workableTieredHullModel("gtceu:block/machines/forge_hammer")
        })

})