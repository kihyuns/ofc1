package egovframework.service.impl;

import java.util.HashMap;

import egovframework.model.HsptVO;

@Service
public class HsptServiceImpl implements HsptService{
	
	@Override
	public List<HsptVO> getHsptList(HashMap<String, Object> reqMap) {
		
		return hsptDao.getHsptList(reqMap);
	}
	
	
}
