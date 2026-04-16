BlockEvents.placed(event => {

    //Credit goes to StarT for this!!!
	let block = event.getBlock();
	if (/^(?:gtceu):.*energy_converter$/.test(block.getId())) {
        block.mergeEntityData({ energyContainer: { feToEu: true } });
	};
    
});