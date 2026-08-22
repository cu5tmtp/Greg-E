ServerEvents.recipes((event) => {

    event.recipes.gtceu.assemblyhall()
        .itemInputs(
            'minecraft:stick'
        )
        .itemOutputs(
            'minecraft:cobblestone'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .addData("cube_block", "gtceu:high_temperature_smelting_casing")

})