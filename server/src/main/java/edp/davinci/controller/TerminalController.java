package edp.davinci.controller;

import edp.core.annotation.CurrentUser;
import edp.davinci.common.controller.BaseController;
import edp.davinci.core.common.Constants;
import edp.davinci.core.common.ResultMap;
import edp.davinci.model.DavinciStaticTerminal;
import edp.davinci.model.User;
import edp.davinci.service.TerminalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping(value = Constants.BASE_API_PATH + "/terminal", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class TerminalController extends BaseController {

    @Autowired
    TerminalService terminalService;
    @GetMapping
    public ResponseEntity getTerminal(@ApiIgnore @CurrentUser User user, HttpServletRequest request){
        List<DavinciStaticTerminal> terminals = terminalService.selTerminalByUser(user);
        return ResponseEntity.ok(new ResultMap(tokenUtils).successAndRefreshToken(request).payloads(terminals));
    }
}
