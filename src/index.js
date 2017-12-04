module.exports = function getBestRacer(distance) {
	var amountOfRacers = distance.length;
	// the position at which the racers start the distance array
	var startPosition = 0;

	// keep the current state of the distance passed for every racer
	var racerArrayMap = Array(amountOfRacers).fill(startPosition);

	// iterate racers, let them jump and check if they have finished the distance
	for (let racerIndex = 0; racerIndex < amountOfRacers; racerIndex++) {
		// jump, save the new position (array index) of the curent racer
		racerArrayMap[racerIndex] = jump(distance[racerIndex], racerArrayMap[racerIndex]);
		// check if we have reached the end of the distance array
		if (racerFinished(distance, racerIndex, racerArrayMap[racerIndex])) return racerIndex;
	}
	
	// helper functions
	
	function racerFinished(distance, racerIndex, racerArrayIndex) {
		// if undefined then we are out of the array
		if (!distance[racerIndex][racerArrayIndex]) return true;

		// if there is a number is the array then we are still withon the array
		return false;
	}

	function jump(racerDistance, racerArrayMapIndex) {
		return racerDistance[racerArrayMapIndex];
	}
}
