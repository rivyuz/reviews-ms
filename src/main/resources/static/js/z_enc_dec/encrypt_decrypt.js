function encryptQs(category) {
	
	var iterationCount = 1000;
	var keySize = 128;
		
	var passphrase = "d51617cedf67f7779e78f93f3eb9b18f"; //CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
	var iv = "35c3035fbd55fdc8751583226f84be04";  //CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
	var salt = "19eb7677ec499755f97201085c970f39" //CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
	
	var aesUtil = new AesUtil(keySize, iterationCount);
	var ciphertext = aesUtil.encrypt(salt, iv, passphrase, category);
	
	return ciphertext.toString(CryptoJS.enc.Base64);

}

function decryptQs(category) {
	
	var iterationCount = 1000;
	var keySize = 128;
		
	var passphrase = "d51617cedf67f7779e78f93f3eb9b18f"; //CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
	var iv = "35c3035fbd55fdc8751583226f84be04";  //CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
	var salt = "19eb7677ec499755f97201085c970f39" //CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
	
	var aesUtil = new AesUtil(keySize, iterationCount);
	var plainText = aesUtil.decrypt(salt, iv, passphrase, category);
	
	return plainText.toString(CryptoJS.enc.Utf8);

}