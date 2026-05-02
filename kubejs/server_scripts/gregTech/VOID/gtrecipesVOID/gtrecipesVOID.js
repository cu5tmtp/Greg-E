ServerEvents.recipes((event) => {

    event.remove({ id: 'gtceu:extruder/nan_certificate'})
    event.recipes.gtceu.extruder('notnoobanymore')
        .itemInputs(
            'gregecore:unstable'
        )
        .itemOutputs(
            'gtceu:nan_certificate'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(1000)

})