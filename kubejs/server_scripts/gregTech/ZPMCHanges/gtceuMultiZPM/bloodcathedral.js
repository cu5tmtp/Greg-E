ServerEvents.recipes((event) => {

    event.recipes.gtceu.bloodcathedral()
        .itemInputs(
            'minecraft:stone_button'
        )
        .itemOutputs(
            'gregecore:solar_activator'
        )
        .addData('bloodcost', 10000)
        .duration(100)

    event.recipes.gtceu.mobpurgatory()
        .notConsumable(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:twilightforest/snow_queen"}}').weakNBT()
        )
        .itemOutputs(
            'gregecore:tinyblood'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)

    event.recipes.gtceu.mobpurgatory()
        .notConsumable(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:undergarden/forgotten_guardian"}}').weakNBT()
        )
        .itemOutputs(
            'gregecore:mediumblood'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)

    event.recipes.gtceu.mobpurgatory()
        .notConsumable(
            Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:draconicevolution/draconic_guardian"}}').weakNBT()
        )
        .itemOutputs(
            'gregecore:largeblood'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(400)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '2x #gtceu:circuits/zpm',
            'gtceu:zpm_machine_hull',
            'mob_grinding_utils:tank',
            '4x #grege:blood'
        )
        .itemOutputs('gregecore:blood_storage_machine')
        .duration(500)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(8)        

})