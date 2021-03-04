package edp.davinci.service.impl;

import edp.davinci.dao.DavinciStaticTerminalMapper;
import edp.davinci.model.DavinciStaticTerminal;
import edp.davinci.model.User;
import edp.davinci.service.TerminalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TerminalServiceImpl implements TerminalService {

    @Autowired
    DavinciStaticTerminalMapper davinciStaticTerminalMapper;
    @Override
    public List<DavinciStaticTerminal> selTerminalByUser(User user) {
        return davinciStaticTerminalMapper.selterminal(user.getId());
    }
}
