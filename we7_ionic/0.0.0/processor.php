<?php

class We7_ionicModuleProcessor extends WeModuleProcessor {
	public function respond() {
		$content = $this->message['content'];
	}
	public function result($errno, $message, $data = '')
    {
        exit(json_encode(array(
            'errno' => $errno,
            'message' => $message,
            'data' => $data,
        )));
    }
}