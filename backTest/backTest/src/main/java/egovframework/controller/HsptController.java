package egovframework.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import egovframework.model.common.ResponseObject;

@Controller
public class HsptController {

		@RequestMapping(value="/getBrodcList.do" )
		public @ResponseBody ResponseObject getBrodcList(HttpSession session,HttpServletRequest request, HttpServletResponse response, CrawlingVO crawlingVO, Model model,
				) throws FileNotFoundException, IOException, SQLException, Exception {
		
			
			ResponseObject json = new ResponseObject();
			try {

				List<CrawlingVO> userList = crawlingService.getBrodcList(reqMap);

				json.IsSucceed = true;
				json.Data = userList;

			} catch (NullPointerException e) {
				
			} catch (Exception e) {
				
			}

			return json;

		}

}