package egovframework.model.common;

public class ResponseObject {
	/**
	 * 오류가 없다면 true
	 */
	public boolean IsSucceed;
	/**
	 * modal 보여줄 메세지
	 */
	public String Message;
	/**
	 * 모달의 확인 버튼을 클릭 후 이동항 url 
	 */
	public String RedirectUrl;
	/**
	 * client에 내려줄 데이터
	 */
	public Object Data;
}
