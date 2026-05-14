GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {

    event.create("component_mass_assembly")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(12, 6, 3, 0)
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('component_mass_assembler', 'simple')
        .tiers([GTValues.MV, GTValues.HV])
        .definition((tier, builder) => {
            return builder
                .recipeType('component_mass_assembly')
                .workableTieredHullModel("gtceu:block/machines/circuit_assembler")
        })

})