package com.wminnovation.myfinances.exception;

public class ErroDeAutenticacao extends RuntimeException {
	public ErroDeAutenticacao (String messagemDeErro) {
		super(messagemDeErro);
	}

}
